import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../firebase';

/**
 * Upload an image to Firebase Storage
 * @param file - The image file to upload
 * @param path - The path in storage (e.g., 'blogs/image.jpg')
 * @param onProgress - Optional callback for upload progress
 * @returns The download URL of the uploaded image
 */
export const uploadImage = async (
    file: File,
    path: string
    // _onProgress parameter removed as it's not used
): Promise<string> => {
    try {
        // Create a storage reference
        const storageRef = ref(storage, path);

        // Upload the file
        const snapshot = await uploadBytes(storageRef, file);

        // Get the download URL
        const downloadURL = await getDownloadURL(snapshot.ref);

        return downloadURL;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw new Error('Failed to upload image');
    }
};

/**
 * Upload a blog image
 * @param file - The image file to upload
 * @param blogId - The blog ID for organizing storage
 * @returns The download URL of the uploaded image
 */
export const uploadBlogImage = async (file: File, blogId?: string): Promise<string> => {
    // Generate a unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 9);
    const fileExtension = file.name.split('.').pop();
    const filename = `${timestamp}_${randomString}.${fileExtension}`;

    // Create the storage path
    const path = blogId
        ? `blogs/${blogId}/${filename}`
        : `blogs/temp/${filename}`;

    return uploadImage(file, path);
};

/**
 * Upload a team member photo
 * @param file - The image file to upload
 * @param memberId - The team member ID for organizing storage
 * @returns The download URL of the uploaded image
 */
export const uploadTeamPhoto = async (file: File, memberId?: string): Promise<string> => {
    // Generate a unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 9);
    const fileExtension = file.name.split('.').pop();
    const filename = `${timestamp}_${randomString}.${fileExtension}`;

    // Create the storage path
    const path = memberId
        ? `team/${memberId}/${filename}`
        : `team/temp/${filename}`;

    return uploadImage(file, path);
};

/**
 * Upload a tournament image
 * @param file - The image file to upload
 * @param tournamentId - The tournament ID for organizing storage
 * @returns The download URL of the uploaded image
 */
export const uploadTournamentImage = async (file: File, tournamentId?: string): Promise<string> => {
    // Generate a unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 9);
    const fileExtension = file.name.split('.').pop();
    const filename = `${timestamp}_${randomString}.${fileExtension}`;

    // Create the storage path
    const path = tournamentId
        ? `tournaments/${tournamentId}/${filename}`
        : `tournaments/temp/${filename}`;

    return uploadImage(file, path);
};

/**
 * Delete an image from Firebase Storage
 * @param imageUrl - The full download URL of the image
 */
export const deleteImage = async (imageUrl: string): Promise<void> => {
    try {
        // Extract the path from the URL
        const decodedUrl = decodeURIComponent(imageUrl);
        const pathMatch = decodedUrl.match(/\/o\/(.+?)\?/);

        if (!pathMatch) {
            throw new Error('Invalid image URL');
        }

        const path = pathMatch[1];
        const storageRef = ref(storage, path);

        await deleteObject(storageRef);
    } catch (error) {
        console.error('Error deleting image:', error);
        throw new Error('Failed to delete image');
    }
};
