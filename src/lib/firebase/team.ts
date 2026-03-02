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
import { TeamMember } from '@/types/team';

const COLLECTION_NAME = 'team';

// Get all team members
export const getAllTeamMembers = async (): Promise<TeamMember[]> => {
    try {
        const teamRef = collection(db, COLLECTION_NAME);
        const q = query(teamRef, orderBy('order', 'asc'));
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || doc.data().createdAt,
            updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || doc.data().updatedAt,
        })) as TeamMember[];
    } catch (error) {
        console.error('Error fetching team members:', error);
        throw error;
    }
};

// Get visible team members (for public display)
export const getVisibleTeamMembers = async (): Promise<TeamMember[]> => {
    try {
        const teamRef = collection(db, COLLECTION_NAME);
        const q = query(
            teamRef,
            where('isVisible', '==', true),
            orderBy('order', 'asc')
        );
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || doc.data().createdAt,
            updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || doc.data().updatedAt,
        })) as TeamMember[];
    } catch (error) {
        console.error('Error fetching visible team members:', error);
        throw error;
    }
};

// Get single team member by ID
export const getTeamMemberById = async (id: string): Promise<TeamMember | null> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data(),
                createdAt: docSnap.data().createdAt?.toDate?.()?.toISOString() || docSnap.data().createdAt,
                updatedAt: docSnap.data().updatedAt?.toDate?.()?.toISOString() || docSnap.data().updatedAt,
            } as TeamMember;
        }

        return null;
    } catch (error) {
        console.error('Error fetching team member:', error);
        throw error;
    }
};

// Create new team member
export const createTeamMember = async (member: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
    try {
        const docRef = await addDoc(collection(db, COLLECTION_NAME), {
            ...member,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        });
        return docRef.id;
    } catch (error) {
        console.error('Error creating team member:', error);
        throw error;
    }
};

// Update team member
export const updateTeamMember = async (id: string, member: Partial<TeamMember>): Promise<void> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        await updateDoc(docRef, {
            ...member,
            updatedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error('Error updating team member:', error);
        throw error;
    }
};

// Delete team member
export const deleteTeamMember = async (id: string): Promise<void> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        await deleteDoc(docRef);
    } catch (error) {
        console.error('Error deleting team member:', error);
        throw error;
    }
};

// Toggle team member visibility
export const toggleTeamMemberVisibility = async (id: string, isVisible: boolean): Promise<void> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        await updateDoc(docRef, {
            isVisible,
            updatedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error('Error toggling team member visibility:', error);
        throw error;
    }
};
