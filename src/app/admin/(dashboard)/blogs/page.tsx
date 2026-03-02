'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Plus, Edit, Trash2, Search, Calendar, Tag, User, Upload, Loader2, FileText } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import {
    getAllBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
    toggleBlogPublish
} from '@/lib/firebase/blogs';
import { uploadBlogImage } from '@/lib/cloudinary';

export default function BlogsManagementPage() {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState<string>('all');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch blogs from Firebase on mount
    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getAllBlogs();
            setBlogPosts(data);
        } catch (err) {
            console.error('Error fetching blogs:', err);
            setError('Failed to load blog posts. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const categories = ['All', 'Education', 'Tournaments', 'Success Stories', 'Coaching Tips', 'Research', 'Parents Guide'];

    const filteredPosts = blogPosts.filter((post) => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = filterCategory === 'all' || filterCategory === 'All' || post.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    const handleCreate = () => {
        setEditingPost(null);
        setIsModalOpen(true);
    };

    const handleEdit = (post: BlogPost) => {
        setEditingPost(post);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this blog post?')) {
            try {
                await deleteBlog(id);
                await fetchBlogs(); // Refresh list
            } catch (err) {
                console.error('Error deleting blog:', err);
                alert('Failed to delete blog post. Please try again.');
            }
        }
    };

    const handleTogglePublish = async (id: string) => {
        try {
            const post = blogPosts.find(p => p.id === id);
            if (post) {
                await toggleBlogPublish(id, !post.isPublished);
                await fetchBlogs(); // Refresh list
            }
        } catch (err) {
            console.error('Error toggling publish status:', err);
            alert('Failed to update publish status. Please try again.');
        }
    };

    const handleSave = async (postData: Partial<BlogPost>) => {
        try {
            if (editingPost) {
                // Update existing
                await updateBlog(editingPost.id, postData);
            } else {
                // Create new
                await createBlog(postData as Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>);
            }
            setIsModalOpen(false);
            setEditingPost(null);
            await fetchBlogs(); // Refresh list
        } catch (err) {
            console.error('Error saving blog:', err);
            // Don't close modal on error, let the modal handle the error state
            throw err; // Re-throw so the modal can handle it
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="font-heading font-bold text-3xl text-slate-900 mb-2">Blog Posts</h1>
                    <p className="text-slate-600">Manage your blog content</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                    <Plus className="w-5 h-5" />
                    Add Blog Post
                </button>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}

            {/* Loading State */}
            {loading ? (
                <>
                    {/* Filters Skeleton */}
                    <div className="bg-white rounded-xl border border-slate-200 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="h-10 bg-slate-200 rounded-lg animate-pulse"></div>
                            <div className="h-10 bg-slate-200 rounded-lg animate-pulse"></div>
                        </div>
                    </div>

                    {/* Blog Posts Grid Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 animate-pulse">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 bg-slate-200 rounded"></div>
                                    <div className="flex-1 space-y-2">
                                        <div className="h-5 bg-slate-200 rounded w-full"></div>
                                        <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                                    </div>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                                    <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-20 h-6 bg-slate-200 rounded-full"></div>
                                </div>
                                <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
                                    <div className="flex-1 h-9 bg-slate-200 rounded-lg"></div>
                                    <div className="w-9 h-9 bg-slate-200 rounded-lg"></div>
                                    <div className="w-9 h-9 bg-slate-200 rounded-lg"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>

                    {/* Filters */}
                    <div className="bg-white rounded-xl border border-slate-200 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search blog posts..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                />
                            </div>
                            <select
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Blog Posts List */}
                    {filteredPosts.length === 0 ? (
                        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-slate-900 mb-1">No blog posts found</h3>
                            <p className="text-slate-500 text-sm">Try adjusting your search or filters</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPosts.map((post) => (
                                <div key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-start gap-3 flex-1">
                                                <div className="text-2xl">{post.image || '📝'}</div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-lg text-slate-900 mb-1 line-clamp-2">{post.title}</h3>
                                                    <p className="text-sm text-slate-500 line-clamp-2">{post.excerpt}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center gap-2 text-sm text-slate-700">
                                                <Tag className="w-4 h-4 text-slate-400" />
                                                <span>{post.category}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-700">
                                                <User className="w-4 h-4 text-slate-400" />
                                                <span>{post.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-700">
                                                <Calendar className="w-4 h-4 text-slate-400" />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${post.isPublished ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {post.isPublished ? 'Published' : 'Draft'}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
                                            <button
                                                onClick={() => handleTogglePublish(post.id)}
                                                className="flex-1 px-3 py-2 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                                                title={post.isPublished ? 'Unpublish' : 'Publish'}
                                            >
                                                {post.isPublished ? 'Unpublish' : 'Publish'}
                                            </button>
                                            <button
                                                onClick={() => handleEdit(post)}
                                                className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                                                title="Edit"
                                            >
                                                <Edit className="w-4 h-4 text-blue-600" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(post.id)}
                                                className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4 text-red-600" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}

            {/* Modal */}
            {isModalOpen && (
                <BlogPostModal
                    post={editingPost}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSave}
                    categories={categories.filter(c => c !== 'All')}
                />
            )}
        </div>
    );
}

function BlogPostModal({
    post,
    onClose,
    onSave,
    categories,
}: {
    post: BlogPost | null;
    onClose: () => void;
    onSave: (post: Partial<BlogPost>) => void;
    categories: string[];
}) {
    const [formData, setFormData] = useState<Partial<BlogPost>>(
        post || {
            title: '',
            excerpt: '',
            content: '',
            category: 'Education',
            author: '',
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            readTime: '5 min read',
            image: '📝',
            isPublished: false,
            isFeatured: false,
            tags: [],
        }
    );
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                setUploadError('Please select an image file');
                return;
            }
            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                setUploadError('Please select an image smaller than 5MB');
                return;
            }
            setSelectedFile(file);
            setUploadError(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsUploading(true);
        setUploadError(null);

        try {
            let imageUrl = formData.image;

            // Upload image if a file is selected
            if (selectedFile) {
                try {
                    imageUrl = await uploadBlogImage(selectedFile, post?.id);
                } catch (error) {
                    console.error('Image upload error:', error);
                    setUploadError('Failed to upload image. Please try again.');
                    setIsUploading(false);
                    return;
                }
            }

            // Save the blog post with image URL
            await onSave({ ...formData, image: imageUrl });
            setIsUploading(false);
        } catch (error) {
            console.error('Save error:', error);
            setUploadError('Failed to save blog post. Please try again.');
            setIsUploading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-xl max-w-4xl w-full my-8">
                <div className="p-6 border-b border-slate-200">
                    <h2 className="font-heading font-bold text-2xl text-slate-900">
                        {post ? 'Edit Blog Post' : 'Create Blog Post'}
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Title *</label>
                            <input
                                type="text"
                                required
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Excerpt *</label>
                            <textarea
                                required
                                value={formData.excerpt}
                                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                rows={2}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Category *</label>
                            <select
                                required
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Author *</label>
                            <input
                                type="text"
                                required
                                value={formData.author}
                                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Date *</label>
                            <input
                                type="text"
                                required
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                placeholder="March 10, 2024"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Read Time</label>
                            <input
                                type="text"
                                value={formData.readTime}
                                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                                placeholder="5 min read"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Featured Image
                            </label>
                            <div className="space-y-3">
                                {/* File Upload */}
                                <div className="flex items-center gap-4">
                                    <label className="flex-1 cursor-pointer">
                                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 hover:border-red-500 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <Upload className="w-5 h-5 text-slate-400" />
                                                <div>
                                                    <p className="text-sm font-medium text-slate-700">
                                                        {selectedFile ? selectedFile.name : 'Choose an image to upload'}
                                                    </p>
                                                    <p className="text-xs text-slate-500">PNG, JPG, GIF up to 5MB</p>
                                                </div>
                                            </div>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                    </label>
                                    {selectedFile && (
                                        <button
                                            type="button"
                                            onClick={() => setSelectedFile(null)}
                                            className="px-3 py-2 text-sm text-red-600 hover:text-red-700 font-medium"
                                        >
                                            Clear
                                        </button>
                                    )}
                                </div>

                                {/* Or manual URL */}
                                <div className="flex items-center gap-3">
                                    <div className="h-px flex-1 bg-slate-200" />
                                    <span className="text-xs text-slate-500">OR</span>
                                    <div className="h-px flex-1 bg-slate-200" />
                                </div>

                                <input
                                    type="text"
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    placeholder="Paste image URL or emoji (🎓)"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                />

                                {uploadError && (
                                    <p className="text-sm text-red-600">{uploadError}</p>
                                )}

                                {/* Image Preview */}
                                {(formData.image || selectedFile) && (
                                    <div className="mt-3">
                                        <p className="text-xs text-slate-600 mb-2">Preview:</p>
                                        <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-lg h-32 flex items-center justify-center overflow-hidden relative">
                                            {selectedFile ? (
                                                <Image
                                                    src={URL.createObjectURL(selectedFile)}
                                                    alt="Preview"
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : formData.image && formData.image.startsWith('http') ? (
                                                <Image
                                                    src={formData.image}
                                                    alt="Preview"
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <span className="text-5xl">{formData.image}</span>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Content (HTML) *</label>
                            <textarea
                                required
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                rows={12}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none font-mono text-sm"
                                placeholder="<p>Your blog content here...</p>"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Tags (comma-separated)</label>
                            <input
                                type="text"
                                value={formData.tags?.join(', ')}
                                onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(t => t.trim()) })}
                                placeholder="education, chess, learning"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div className="md:col-span-2 flex items-center gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.isPublished}
                                    onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                                    className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-500"
                                />
                                <span className="text-sm font-semibold text-slate-700">Published</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.isFeatured}
                                    onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                                    className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-500"
                                />
                                <span className="text-sm font-semibold text-slate-700">Featured Post</span>
                            </label>
                        </div>
                    </div>
                </form>

                <div className="p-6 border-t border-slate-200 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isUploading}
                        className="px-5 py-2.5 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors font-semibold text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isUploading}
                        className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {isUploading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Uploading...
                            </>
                        ) : (
                            <>{post ? 'Update' : 'Create'} Post</>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
