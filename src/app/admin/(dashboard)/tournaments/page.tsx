'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Plus, Edit, Trash2, Eye, EyeOff, Search, Calendar, MapPin, Users, Trophy, Upload, Loader2 } from 'lucide-react';
import { Tournament } from '@/types/tournament';
import {
    getAllTournaments,
    createTournament,
    updateTournament,
    deleteTournament,
    toggleTournamentVisibility
} from '@/lib/firebase/tournaments';
import { uploadTournamentImage } from '@/lib/cloudinary';

export default function TournamentsManagementPage() {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTournament, setEditingTournament] = useState<Tournament | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState<string>('all');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch tournaments from Firebase on mount
    useEffect(() => {
        fetchTournaments();
    }, []);

    const fetchTournaments = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getAllTournaments();
            setTournaments(data);
        } catch (err) {
            console.error('Error fetching tournaments:', err);
            setError('Failed to load tournaments. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const filteredTournaments = tournaments.filter((tournament) => {
        const matchesSearch = tournament.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tournament.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === 'all' || tournament.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const handleCreate = () => {
        setEditingTournament(null);
        setIsModalOpen(true);
    };

    const handleEdit = (tournament: Tournament) => {
        setEditingTournament(tournament);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this tournament?')) {
            try {
                await deleteTournament(id);
                await fetchTournaments(); // Refresh list
            } catch (err) {
                console.error('Error deleting tournament:', err);
                alert('Failed to delete tournament. Please try again.');
            }
        }
    };

    const handleToggleVisibility = async (id: string) => {
        try {
            const tournament = tournaments.find(t => t.id === id);
            if (tournament) {
                await toggleTournamentVisibility(id, !tournament.isVisible);
                await fetchTournaments(); // Refresh list
            }
        } catch (err) {
            console.error('Error toggling visibility:', err);
            alert('Failed to update visibility. Please try again.');
        }
    };

    const handleSave = async (tournamentData: Partial<Tournament>) => {
        try {
            if (editingTournament) {
                // Update existing
                await updateTournament(editingTournament.id, tournamentData);
            } else {
                // Create new
                await createTournament(tournamentData as Omit<Tournament, 'id' | 'createdAt' | 'updatedAt'>);
            }
            setIsModalOpen(false);
            await fetchTournaments(); // Refresh list
        } catch (err) {
            console.error('Error saving tournament:', err);
            alert('Failed to save tournament. Please try again.');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="font-heading font-bold text-3xl text-slate-900 mb-2">Tournaments</h1>
                    <p className="text-slate-600">Manage your chess tournaments</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                    <Plus className="w-5 h-5" />
                    Add Tournament
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

                    {/* Tournaments Grid Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 animate-pulse">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1 space-y-2">
                                        <div className="h-5 bg-slate-200 rounded w-3/4"></div>
                                        <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-slate-200 rounded"></div>
                                        <div className="w-16 h-6 bg-slate-200 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="space-y-3 mb-4">
                                    <div className="h-4 bg-slate-200 rounded w-full"></div>
                                    <div className="h-4 bg-slate-200 rounded w-full"></div>
                                    <div className="h-4 bg-slate-200 rounded w-2/3"></div>
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
                                    placeholder="Search tournaments..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                />
                            </div>
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            >
                                <option value="all">All Status</option>
                                <option value="open">Open</option>
                                <option value="upcoming">Upcoming</option>
                                <option value="closed">Closed</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                    </div>

                    {/* Tournaments List */}
                    {filteredTournaments.length === 0 ? (
                        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                            <Trophy className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-slate-900 mb-1">No tournaments found</h3>
                            <p className="text-slate-500 text-sm">Try adjusting your search or filters</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredTournaments.map((tournament) => (
                                <div key={tournament.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lg text-slate-900 mb-1">{tournament.title}</h3>
                                                <p className="text-sm text-slate-500">{tournament.category}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {tournament.isVisible ? (
                                                    <Eye className="w-4 h-4 text-green-600" />
                                                ) : (
                                                    <EyeOff className="w-4 h-4 text-slate-400" />
                                                )}
                                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${tournament.status === 'open' ? 'bg-green-100 text-green-700' :
                                                    tournament.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                                                        tournament.status === 'closed' ? 'bg-orange-100 text-orange-700' :
                                                            'bg-slate-100 text-slate-700'
                                                    }`}>
                                                    {tournament.status}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-3 mb-4">
                                            <div className="flex items-center gap-2 text-sm text-slate-700">
                                                <Calendar className="w-4 h-4 text-slate-400" />
                                                <span>{new Date(tournament.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-700">
                                                <MapPin className="w-4 h-4 text-slate-400" />
                                                <span>{tournament.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-700">
                                                <Users className="w-4 h-4 text-slate-400" />
                                                <span>{tournament.currentParticipants || 0}/{tournament.maxParticipants || '-'} participants</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
                                            <button
                                                onClick={() => handleToggleVisibility(tournament.id)}
                                                className="flex-1 px-3 py-2 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                                                title={tournament.isVisible ? 'Hide' : 'Show'}
                                            >
                                                {tournament.isVisible ? 'Hide' : 'Show'}
                                            </button>
                                            <button
                                                onClick={() => handleEdit(tournament)}
                                                className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                                                title="Edit"
                                            >
                                                <Edit className="w-4 h-4 text-blue-600" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(tournament.id)}
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
                <TournamentModal
                    tournament={editingTournament}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
}

function TournamentModal({
    tournament,
    onClose,
    onSave,
}: {
    tournament: Tournament | null;
    onClose: () => void;
    onSave: (tournament: Partial<Tournament>) => void;
}) {
    const [formData, setFormData] = useState<Partial<Tournament>>(
        tournament || {
            title: '',
            date: '',
            endDate: '',
            location: '',
            category: '',
            status: 'upcoming',
            description: '',
            entryFee: '',
            prizePool: '',
            maxParticipants: 0,
            currentParticipants: 0,
            format: '',
            timeControl: '',
            registrationDeadline: '',
            contact: '',
            isFeatured: false,
            isVisible: true,
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
                    imageUrl = await uploadTournamentImage(selectedFile, tournament?.id);
                } catch (error) {
                    console.error('Image upload error:', error);
                    setUploadError('Failed to upload image. Please try again.');
                    setIsUploading(false);
                    return;
                }
            }

            // Save the tournament with image URL
            await onSave({ ...formData, image: imageUrl });
            setIsUploading(false);
        } catch (error) {
            console.error('Save error:', error);
            setUploadError('Failed to save tournament. Please try again.');
            setIsUploading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-xl max-w-3xl w-full my-8">
                <div className="p-6 border-b border-slate-200">
                    <h2 className="font-heading font-bold text-2xl text-slate-900">
                        {tournament ? 'Edit Tournament' : 'Create Tournament'}
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

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Start Date *</label>
                            <input
                                type="date"
                                required
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">End Date</label>
                            <input
                                type="date"
                                value={formData.endDate}
                                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Location *</label>
                            <input
                                type="text"
                                required
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Category *</label>
                            <input
                                type="text"
                                required
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                placeholder="e.g., Under 14, Under 18"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Status *</label>
                            <select
                                required
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value as Tournament['status'] })}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            >
                                <option value="open">Open</option>
                                <option value="upcoming">Upcoming</option>
                                <option value="closed">Closed</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                rows={3}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Entry Fee</label>
                            <input
                                type="text"
                                value={formData.entryFee}
                                onChange={(e) => setFormData({ ...formData, entryFee: e.target.value })}
                                placeholder="e.g., KES 500"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Prize Pool</label>
                            <input
                                type="text"
                                value={formData.prizePool}
                                onChange={(e) => setFormData({ ...formData, prizePool: e.target.value })}
                                placeholder="e.g., KES 200,000"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Max Participants</label>
                            <input
                                type="number"
                                value={formData.maxParticipants}
                                onChange={(e) => setFormData({ ...formData, maxParticipants: parseInt(e.target.value) || 0 })}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Current Participants</label>
                            <input
                                type="number"
                                value={formData.currentParticipants}
                                onChange={(e) => setFormData({ ...formData, currentParticipants: parseInt(e.target.value) || 0 })}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Format</label>
                            <input
                                type="text"
                                value={formData.format}
                                onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                                placeholder="e.g., Swiss System - 7 rounds"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Time Control</label>
                            <input
                                type="text"
                                value={formData.timeControl}
                                onChange={(e) => setFormData({ ...formData, timeControl: e.target.value })}
                                placeholder="e.g., 30 minutes + 10 seconds"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Registration Deadline</label>
                            <input
                                type="date"
                                value={formData.registrationDeadline}
                                onChange={(e) => setFormData({ ...formData, registrationDeadline: e.target.value })}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Contact Email</label>
                            <input
                                type="email"
                                value={formData.contact}
                                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                placeholder="tournaments@elitechess.co.ke"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Tournament Image
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
                                    type="text"
                                    value={formData.image || ''}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    placeholder="Paste image URL"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                />

                                {uploadError && (
                                    <p className="text-sm text-red-600">{uploadError}</p>
                                )}

                                {/* Image Preview */}
                                {(formData.image || selectedFile) && (
                                    <div className="mt-3">
                                        <p className="text-xs text-slate-600 mb-2">Preview:</p>
                                        <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-lg h-40 flex items-center justify-center overflow-hidden relative">
                                            {selectedFile ? (
                                                <Image
                                                    src={URL.createObjectURL(selectedFile)}
                                                    alt="Preview"
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : formData.image ? (
                                                <Image
                                                    src={formData.image}
                                                    alt="Preview"
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : null}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="md:col-span-2 flex items-center gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.isFeatured}
                                    onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                                    className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-500"
                                />
                                <span className="text-sm font-semibold text-slate-700">Featured Tournament</span>
                            </label>

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
                            <>{tournament ? 'Update' : 'Create'} Tournament</>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
