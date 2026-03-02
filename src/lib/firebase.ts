// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2UYE4T-9nZfQl5Cy7zGyi6dbmEJemCUY",
    authDomain: "elite-chess-ventures.firebaseapp.com",
    projectId: "elite-chess-ventures",
    storageBucket: "elite-chess-ventures.firebasestorage.app",
    messagingSenderId: "152279030980",
    appId: "1:152279030980:web:b41040307f1567a25abd91",
    measurementId: "G-VWQF7TL9FX"
};

// Initialize Firebase (only once)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;
