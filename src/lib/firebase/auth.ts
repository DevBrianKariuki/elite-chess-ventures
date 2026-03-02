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
    } catch (error: unknown) {
        console.error('Sign in error:', error);
        const message = error instanceof Error ? error.message : 'Failed to sign in';
        return { user: null, error: message };
    }
};

/**
 * Sign out the current user
 */
export const signOut = async () => {
    try {
        await firebaseSignOut(auth);
        return { error: null };
    } catch (error: unknown) {
        console.error('Sign out error:', error);
        const message = error instanceof Error ? error.message : 'Failed to sign out';
        return { error: message };
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
