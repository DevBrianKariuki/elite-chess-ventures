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
import { Tournament } from '@/types/tournament';

const COLLECTION_NAME = 'tournaments';

// Get all tournaments
export const getAllTournaments = async (): Promise<Tournament[]> => {
    try {
        const tournamentsRef = collection(db, COLLECTION_NAME);
        const q = query(tournamentsRef, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            date: doc.data().date?.toDate?.()?.toISOString() || doc.data().date,
            createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || doc.data().createdAt,
            updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || doc.data().updatedAt,
        })) as Tournament[];
    } catch (error) {
        console.error('Error fetching tournaments:', error);
        throw error;
    }
};

// Get visible tournaments (for public display)
export const getVisibleTournaments = async (): Promise<Tournament[]> => {
    try {
        const tournamentsRef = collection(db, COLLECTION_NAME);
        const q = query(
            tournamentsRef,
            where('isVisible', '==', true),
            orderBy('date', 'desc')
        );
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            date: doc.data().date?.toDate?.()?.toISOString() || doc.data().date,
            createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || doc.data().createdAt,
            updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || doc.data().updatedAt,
        })) as Tournament[];
    } catch (error) {
        console.error('Error fetching visible tournaments:', error);
        throw error;
    }
};

// Get single tournament by ID
export const getTournamentById = async (id: string): Promise<Tournament | null> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data(),
                date: docSnap.data().date?.toDate?.()?.toISOString() || docSnap.data().date,
                createdAt: docSnap.data().createdAt?.toDate?.()?.toISOString() || docSnap.data().createdAt,
                updatedAt: docSnap.data().updatedAt?.toDate?.()?.toISOString() || docSnap.data().updatedAt,
            } as Tournament;
        }

        return null;
    } catch (error) {
        console.error('Error fetching tournament:', error);
        throw error;
    }
};

// Create new tournament
export const createTournament = async (tournament: Omit<Tournament, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
    try {
        const docRef = await addDoc(collection(db, COLLECTION_NAME), {
            ...tournament,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        });
        return docRef.id;
    } catch (error) {
        console.error('Error creating tournament:', error);
        throw error;
    }
};

// Update tournament
export const updateTournament = async (id: string, tournament: Partial<Tournament>): Promise<void> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        await updateDoc(docRef, {
            ...tournament,
            updatedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error('Error updating tournament:', error);
        throw error;
    }
};

// Delete tournament
export const deleteTournament = async (id: string): Promise<void> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        await deleteDoc(docRef);
    } catch (error) {
        console.error('Error deleting tournament:', error);
        throw error;
    }
};

// Toggle tournament visibility
export const toggleTournamentVisibility = async (id: string, isVisible: boolean): Promise<void> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        await updateDoc(docRef, {
            isVisible,
            updatedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error('Error toggling tournament visibility:', error);
        throw error;
    }
};
