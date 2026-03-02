/**
 * Data Migration Script
 * 
 * This script migrates your existing sample data to Firebase Firestore.
 * Run this once to populate your Firebase database with initial data.
 * 
 * To run: node scripts/migrate-data.js
 * or add to package.json scripts and run: npm run migrate
 */

// This would need to be run in Node.js environment
// For now, this is a template that shows the structure

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2UYE4T-9nZfQl5Cy7zGyi6dbmEJemCUY",
    authDomain: "elite-chess-ventures.firebaseapp.com",
    projectId: "elite-chess-ventures",
    storageBucket: "elite-chess-ventures.firebasestorage.app",
    messagingSenderId: "152279030980",
    appId: "1:152279030980:web:b41040307f1567a25abd91",
    measurementId: "G-VWQF7TL9FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Import your existing data
// Note: You'll need to adjust the imports based on your setup
import { tournaments } from '../src/data/tournaments';
import { blogPosts } from '../src/data/blogs';
import { teamMembers } from '../src/data/team';

async function migrateTournaments() {
    console.log('Migrating tournaments...');
    const tournamentsRef = collection(db, 'tournaments');

    for (const tournament of tournaments) {
        try {
            const { id, createdAt, updatedAt, ...data } = tournament;
            await addDoc(tournamentsRef, {
                ...data,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            });
            console.log(`✓ Migrated tournament: ${tournament.title}`);
        } catch (error) {
            console.error(`✗ Failed to migrate tournament: ${tournament.title}`, error);
        }
    }
}

async function migrateBlogs() {
    console.log('Migrating blog posts...');
    const blogsRef = collection(db, 'blogs');

    for (const blog of blogPosts) {
        try {
            const { id, createdAt, updatedAt, ...data } = blog;
            await addDoc(blogsRef, {
                ...data,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            });
            console.log(`✓ Migrated blog: ${blog.title}`);
        } catch (error) {
            console.error(`✗ Failed to migrate blog: ${blog.title}`, error);
        }
    }
}

async function migrateTeamMembers() {
    console.log('Migrating team members...');
    const teamRef = collection(db, 'team');

    for (const member of teamMembers) {
        try {
            const { id, createdAt, updatedAt, ...data } = member;
            await addDoc(teamRef, {
                ...data,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            });
            console.log(`✓ Migrated team member: ${member.name}`);
        } catch (error) {
            console.error(`✗ Failed to migrate team member: ${member.name}`, error);
        }
    }
}

async function migrate() {
    console.log('===========================================');
    console.log('Starting Data Migration to Firebase');
    console.log('===========================================\n');

    try {
        await migrateTournaments();
        console.log('\n');

        await migrateBlogs();
        console.log('\n');

        await migrateTeamMembers();
        console.log('\n');

        console.log('===========================================');
        console.log('Migration Complete!');
        console.log('===========================================');
        console.log('\nCheck your Firebase Console to verify the data.');
        console.log('Console: https://console.firebase.google.com/');

        process.exit(0);
    } catch (error) {
        console.error('\n===========================================');
        console.error('Migration Failed!');
        console.error('===========================================');
        console.error(error);
        process.exit(1);
    }
}

// Run migration
migrate();
