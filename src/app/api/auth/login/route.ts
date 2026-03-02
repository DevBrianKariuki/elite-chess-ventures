import { NextRequest, NextResponse } from 'next/server';

// In production, use proper authentication with hashed passwords and a database
// For now, we'll use environment variables
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@elitechess.co.ke';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        // Simple authentication check
        // In production, use proper password hashing (bcrypt) and database lookup
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            return NextResponse.json({
                email: ADMIN_EMAIL,
                name: 'Admin User',
            });
        }

        return NextResponse.json(
            { error: 'Invalid credentials' },
            { status: 401 }
        );
    } catch {
        return NextResponse.json(
            { error: 'Authentication failed' },
            { status: 500 }
        );
    }
}
