'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff, Search, Mail, Award, Users, Upload, Loader2 } from 'lucide-react';
import { TeamMember } from '@/types/team';
import {
    getAllTeamMembers,
    createTeamMember,
    updateTeamMember,
    deleteTeamMember,
    toggleTeamMemberVisibility
} from '@/lib/firebase/team';
import { uploadTeamPhoto } from '@/lib/cloudinary';

export default function TeamManagementPage() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch team members from Firebase on mount
    useEffect(() => {
        fetchTeamMembers();
    }, []);

    const fetchTeamMembers = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getAllTeamMembers();
            setTeamMembers(data);
        } catch (err) {
            console.error('Error fetching team members:', err);
            setError('Failed to load team members. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const filteredMembers = teamMembers.filter((member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCreate = () => {
        setEditingMember(null);
        setIsModalOpen(true);
    };

    const handleEdit = (member: TeamMember) => {
        setEditingMember(member);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this team member?')) {
            try {
                await deleteTeamMember(id);
                await fetchTeamMembers(); // Refresh list
            } catch (err) {
                console.error('Error deleting team member:', err);
                alert('Failed to delete team member. Please try again.');
            }
        }
    };

    const handleToggleVisibility = async (id: string) => {
        try {
            const member = teamMembers.find(m => m.id === id);
            if (member) {
                await toggleTeamMemberVisibility(id, !member.isVisible);
                await fetchTeamMembers(); // Refresh list
            }
        } catch (err) {
            console.error('Error toggling visibility:', err);
            alert('Failed to update visibility. Please try again.');
        }
    };

    const handleSave = async (memberData: Partial<TeamMember>) => {
        try {
            if (editingMember) {
                await updateTeamMember(editingMember.id, memberData);
            } else {
                await createTeamMember(memberData as Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>);
            }
            setIsModalOpen(false);
            setEditingMember(null);
            await fetchTeamMembers(); // Refresh list
        } catch (err) {
            console.error('Error saving team member:', err);
            // Don't close modal on error, let the modal handle the error state
            throw err; // Re-throw so the modal can handle it
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="font-heading font-bold text-3xl text-slate-900 mb-2">Team Members</h1>
                    <p className="text-slate-600">Manage your team displayed on the about page</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                    <Plus className="w-5 h-5" />
                    Add Team Member
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
                    {/* Search Skeleton */}
                    <div className="bg-white rounded-xl border border-slate-200 p-4">
                        <div className="h-10 bg-slate-200 rounded-lg animate-pulse"></div>
                    </div>

                    {/* Team Members Grid Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 animate-pulse">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-16 h-16 bg-slate-200 rounded-full"></div>
                                    <div className="w-8 h-8 bg-slate-200 rounded-lg"></div>
                                </div>
                                <div className="space-y-2 mb-3">
                                    <div className="h-5 bg-slate-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                                    <div className="h-3 bg-slate-200 rounded w-1/3"></div>
                                </div>
                                <div className="h-10 bg-slate-200 rounded mb-4"></div>
                                <div className="flex gap-2 mb-4">
                                    <div className="h-6 w-16 bg-slate-200 rounded"></div>
                                    <div className="h-6 w-16 bg-slate-200 rounded"></div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex-1 h-10 bg-slate-200 rounded-lg"></div>
                                    <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>

                    {/* Search */}
                    <div className="bg-white rounded-xl border border-slate-200 p-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search team members..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    {filteredMembers.length === 0 ? (
                        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                            <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-slate-900 mb-1">No team members found</h3>
                            <p className="text-slate-500 text-sm">Try adjusting your search</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredMembers.map((member) => (
                                <div key={member.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-amber-100 rounded-full flex items-center justify-center overflow-hidden">
                                                {member.photo ? (
                                                    <img
                                                        src={member.photo}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <span className="text-3xl">{member.avatar || '👤'}</span>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => handleToggleVisibility(member.id)}
                                                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                                                title={member.isVisible ? 'Hide' : 'Show'}
                                            >
                                                {member.isVisible ? (
                                                    <Eye className="w-4 h-4 text-green-600" />
                                                ) : (
                                                    <EyeOff className="w-4 h-4 text-slate-400" />
                                                )}
                                            </button>
                                        </div>

                                        <h3 className="font-heading font-bold text-lg text-slate-900 mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-slate-600 mb-1">{member.role}</p>
                                        <p className="text-xs text-red-600 font-semibold mb-3">{member.rating}</p>

                                        {member.bio && (
                                            <p className="text-xs text-slate-600 line-clamp-2 mb-3">{member.bio}</p>
                                        )}

                                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                            {member.email && (
                                                <div className="flex items-center gap-1">
                                                    <Mail className="w-3 h-3" />
                                                    <span className="truncate">{member.email}</span>
                                                </div>
                                            )}
                                            {member.yearsOfExperience && (
                                                <div className="flex items-center gap-1">
                                                    <Award className="w-3 h-3" />
                                                    <span>{member.yearsOfExperience} years</span>
                                                </div>
                                            )}
                                        </div>

                                        {member.specialties && member.specialties.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {member.specialties.slice(0, 2).map((specialty) => (
                                                    <span key={specialty} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                                                        {specialty}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEdit(member)}
                                                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                                            >
                                                <Edit className="w-4 h-4" />
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(member.id)}
                                                className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
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
                <TeamMemberModal
                    member={editingMember}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
}

function TeamMemberModal({
    member,
    onClose,
    onSave,
}: {
    member: TeamMember | null;
    onClose: () => void;
    onSave: (member: Partial<TeamMember>) => void;
}) {
    const [formData, setFormData] = useState<Partial<TeamMember>>(
        member || {
            name: '',
            role: '',
            rating: '',
            bio: '',
            avatar: '👤',
            email: '',
            specialties: [],
            yearsOfExperience: 0,
            isVisible: true,
            order: 0,
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
            let photoUrl = formData.photo;

            // Upload photo if a file is selected
            if (selectedFile) {
                try {
                    photoUrl = await uploadTeamPhoto(selectedFile, member?.id);
                } catch (error) {
                    console.error('Photo upload error:', error);
                    setUploadError('Failed to upload photo. Please try again.');
                    setIsUploading(false);
                    return;
                }
            }

            // Save the team member with photo URL
            await onSave({ ...formData, photo: photoUrl });
            setIsUploading(false);
        } catch (error) {
            console.error('Save error:', error);
            setUploadError('Failed to save team member. Please try again.');
            setIsUploading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-xl max-w-2xl w-full my-8">
                <div className="p-6 border-b border-slate-200">
                    <h2 className="font-heading font-bold text-2xl text-slate-900">
                        {member ? 'Edit Team Member' : 'Add Team Member'}
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Role *</label>
                            <input
                                type="text"
                                required
                                value={formData.role}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                placeholder="e.g., Head Coach"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Rating *</label>
                            <input
                                type="text"
                                required
                                value={formData.rating}
                                onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                                placeholder="e.g., FIDE Master"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Bio</label>
                            <textarea
                                value={formData.bio}
                                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                rows={3}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Avatar (Emoji)</label>
                            <input
                                type="text"
                                value={formData.avatar}
                                onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                                placeholder="👤"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Team Member Photo
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
                                                        {selectedFile ? selectedFile.name : 'Choose a photo to upload'}
                                                    </p>
                                                    <p className="text-xs text-slate-500">PNG, JPG up to 5MB</p>
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
                                    type="url"
                                    value={formData.photo || ''}
                                    onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
                                    placeholder="Paste photo URL"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                />

                                {uploadError && (
                                    <p className="text-sm text-red-600">{uploadError}</p>
                                )}

                                {/* Photo Preview */}
                                {(formData.photo || selectedFile) && (
                                    <div className="mt-3">
                                        <p className="text-xs text-slate-600 mb-2">Preview:</p>
                                        <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-lg h-32 w-32 flex items-center justify-center overflow-hidden">
                                            {selectedFile ? (
                                                <img
                                                    src={URL.createObjectURL(selectedFile)}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : formData.photo ? (
                                                <img
                                                    src={formData.photo}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : null}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Years of Experience</label>
                            <input
                                type="number"
                                value={formData.yearsOfExperience}
                                onChange={(e) => setFormData({ ...formData, yearsOfExperience: parseInt(e.target.value) || 0 })}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Display Order</label>
                            <input
                                type="number"
                                value={formData.order}
                                onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Specialties (comma-separated)</label>
                            <input
                                type="text"
                                value={formData.specialties?.join(', ')}
                                onChange={(e) => setFormData({ ...formData, specialties: e.target.value.split(',').map(s => s.trim()) })}
                                placeholder="Opening Theory, Endgame Mastery, Tournament Preparation"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.isVisible}
                                    onChange={(e) => setFormData({ ...formData, isVisible: e.target.checked })}
                                    className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-500"
                                />
                                <span className="text-sm font-semibold text-slate-700">Visible on Website</span>
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
                            <>{member ? 'Update' : 'Create'} Member</>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
