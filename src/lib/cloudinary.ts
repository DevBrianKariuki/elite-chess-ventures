/**
 * Cloudinary Image Upload Service
 * Handles image uploads to Cloudinary with optimizations
 */

interface CloudinaryUploadResponse {
    secure_url: string;
    public_id: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
}

/**
 * Upload image to Cloudinary
 * @param file - The image file to upload
 * @param folder - Cloudinary folder path (e.g., 'blogs', 'team', 'tournaments')
 * @param onProgress - Optional callback for upload progress
 * @returns The secure URL of the uploaded image
 */
export const uploadToCloudinary = async (
    file: File,
    folder: string = 'elite-chess',
    onProgress?: (progress: number) => void
): Promise<string> => {
    try {
        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
        const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

        if (!cloudName || !uploadPreset) {
            throw new Error('Cloudinary configuration is missing. Please check your environment variables.');
        }

        // Create form data
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);
        formData.append('folder', folder);

        // Add tags for better organization
        formData.append('tags', `elite-chess,${folder}`);

        // Upload to Cloudinary
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            {
                method: 'POST',
                body: formData,
            }
        );

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'Failed to upload image to Cloudinary');
        }

        const data: CloudinaryUploadResponse = await response.json();

        // Return the secure URL
        return data.secure_url;
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        throw error;
    }
};

/**
 * Upload blog image to Cloudinary
 * @param file - The image file to upload
 * @param blogId - Optional blog ID for naming
 * @returns The secure URL of the uploaded image
 */
export const uploadBlogImage = async (
    file: File,
    blogId?: string
): Promise<string> => {
    const folder = blogId ? `elite-chess/blogs/${blogId}` : 'elite-chess/blogs';
    return uploadToCloudinary(file, folder);
};

/**
 * Upload team member photo to Cloudinary
 * @param file - The image file to upload
 * @param memberId - Optional member ID for naming
 * @returns The secure URL of the uploaded image
 */
export const uploadTeamPhoto = async (
    file: File,
    memberId?: string
): Promise<string> => {
    const folder = memberId ? `elite-chess/team/${memberId}` : 'elite-chess/team';
    return uploadToCloudinary(file, folder);
};

/**
 * Upload tournament image to Cloudinary
 * @param file - The image file to upload
 * @param tournamentId - Optional tournament ID for naming
 * @returns The secure URL of the uploaded image
 */
export const uploadTournamentImage = async (
    file: File,
    tournamentId?: string
): Promise<string> => {
    const folder = tournamentId ? `elite-chess/tournaments/${tournamentId}` : 'elite-chess/tournaments';
    return uploadToCloudinary(file, folder);
};

/**
 * Get optimized image URL from Cloudinary
 * @param publicId - Cloudinary public ID
 * @param transformations - Optional transformations (width, height, quality, etc.)
 * @returns Optimized image URL
 */
export const getOptimizedImageUrl = (
    publicId: string,
    transformations?: {
        width?: number;
        height?: number;
        quality?: 'auto' | number;
        format?: 'auto' | 'jpg' | 'png' | 'webp';
        crop?: 'fill' | 'fit' | 'scale' | 'limit';
    }
): string => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!cloudName) {
        console.warn('Cloudinary cloud name not configured');
        return '';
    }

    const {
        width,
        height,
        quality = 'auto',
        format = 'auto',
        crop = 'fill'
    } = transformations || {};

    let transformString = 'f_auto,q_auto';

    if (width) transformString += `,w_${width}`;
    if (height) transformString += `,h_${height}`;
    if (crop) transformString += `,c_${crop}`;
    if (quality !== 'auto') transformString += `,q_${quality}`;
    if (format !== 'auto') transformString += `,f_${format}`;

    return `https://res.cloudinary.com/${cloudName}/image/upload/${transformString}/${publicId}`;
};

/**
 * Extract Cloudinary public ID from URL
 * @param url - Cloudinary URL
 * @returns Public ID or empty string
 */
export const extractPublicId = (url: string): string => {
    try {
        const match = url.match(/\/upload\/(?:v\d+\/)?(.+?)(?:\.[^.]+)?$/);
        return match ? match[1] : '';
    } catch (error) {
        console.error('Error extracting public ID:', error);
        return '';
    }
};

/**
 * Delete image from Cloudinary (requires backend/API route)
 * Note: This should be called from an API route due to security
 * @param publicId - Cloudinary public ID
 */
export const deleteFromCloudinary = async (publicId: string): Promise<void> => {
    try {
        // This should be implemented as an API route in src/app/api/cloudinary/delete
        const response = await fetch('/api/cloudinary/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ publicId }),
        });

        if (!response.ok) {
            throw new Error('Failed to delete image from Cloudinary');
        }
    } catch (error) {
        console.error('Error deleting from Cloudinary:', error);
        throw error;
    }
};
