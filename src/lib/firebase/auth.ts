import {
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged as firebaseOnAuthStateChanged,
    type User
} from 'firebase/auth';
import { auth } from '../firebase';

/**
 * Sign in with email and password
 */
export const signIn = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { user: userCredential.user, error: null };
    } catch (error: any) {
        console.error('Sign in error:', error);
        return { user: null, error: error.message || 'Failed to sign in' };
    }
};

/**
 * Sign out the current user
 */
export const signOut = async () => {
    try {
        await firebaseSignOut(auth);
        return { error: null };
    } catch (error: any) {
        console.error('Sign out error:', error);
        return { error: error.message || 'Failed to sign out' };
    }
};

/**
 * Listen to auth state changes
 */
export const onAuthStateChanged = (callback: (user: User | null) => void) => {
    return firebaseOnAuthStateChanged(auth, callback);
};

/**
 * Get the current user
 */
export const getCurrentUser = () => {
    return auth.currentUser;
};
