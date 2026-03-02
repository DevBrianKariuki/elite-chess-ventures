import {
    collection,
    doc,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    orderBy,
    where,
    serverTimestamp
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { BlogPost } from '@/types/blog';

const COLLECTION_NAME = 'blogs';

// Get all blog posts
export const getAllBlogs = async (): Promise<BlogPost[]> => {
    try {
        const blogsRef = collection(db, COLLECTION_NAME);
        const q = query(blogsRef, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || doc.data().createdAt,
            updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || doc.data().updatedAt,
        })) as BlogPost[];
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
};

// Get published blog posts (for public display)
export const getPublishedBlogs = async (): Promise<BlogPost[]> => {
    try {
        const blogsRef = collection(db, COLLECTION_NAME);
        const q = query(
            blogsRef,
            where('isPublished', '==', true),
            orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || doc.data().createdAt,
            updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || doc.data().updatedAt,
        })) as BlogPost[];
    } catch (error) {
        console.error('Error fetching published blogs:', error);
        throw error;
    }
};

// Get blog posts by category
export const getBlogsByCategory = async (category: string): Promise<BlogPost[]> => {
    try {
        const blogsRef = collection(db, COLLECTION_NAME);
        const q = query(
            blogsRef,
            where('category', '==', category),
            where('isPublished', '==', true),
            orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || doc.data().createdAt,
            updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || doc.data().updatedAt,
        })) as BlogPost[];
    } catch (error) {
        console.error('Error fetching blogs by category:', error);
        throw error;
    }
};

// Get single blog post by ID
export const getBlogById = async (id: string): Promise<BlogPost | null> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data(),
                createdAt: docSnap.data().createdAt?.toDate?.()?.toISOString() || docSnap.data().createdAt,
                updatedAt: docSnap.data().updatedAt?.toDate?.()?.toISOString() || docSnap.data().updatedAt,
            } as BlogPost;
        }

        return null;
    } catch (error) {
        console.error('Error fetching blog:', error);
        throw error;
    }
};

// Create new blog post
export const createBlog = async (blog: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
    try {
        const docRef = await addDoc(collection(db, COLLECTION_NAME), {
            ...blog,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        });
        return docRef.id;
    } catch (error) {
        console.error('Error creating blog:', error);
        throw error;
    }
};

// Update blog post
export const updateBlog = async (id: string, blog: Partial<BlogPost>): Promise<void> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        await updateDoc(docRef, {
            ...blog,
            updatedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error('Error updating blog:', error);
        throw error;
    }
};

// Delete blog post
export const deleteBlog = async (id: string): Promise<void> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        await deleteDoc(docRef);
    } catch (error) {
        console.error('Error deleting blog:', error);
        throw error;
    }
};

// Toggle blog publish status
export const toggleBlogPublish = async (id: string, isPublished: boolean): Promise<void> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        await updateDoc(docRef, {
            isPublished,
            updatedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error('Error toggling blog publish status:', error);
        throw error;
    }
};
