/**
 * Cloudinary Image Deletion API Route
 * Handles secure deletion of images from Cloudinary
 */

import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
    try {
        const { publicId } = await request.json();

        if (!publicId) {
            return NextResponse.json(
                { error: 'Public ID is required' },
                { status: 400 }
            );
        }

        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
        const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
        const apiSecret = process.env.CLOUDINARY_API_SECRET;

        if (!cloudName || !apiKey || !apiSecret) {
            return NextResponse.json(
                { error: 'Cloudinary configuration is missing' },
                { status: 500 }
            );
        }

        // Generate timestamp for signature
        const timestamp = Math.round(new Date().getTime() / 1000);

        // Create signature string
        const signatureString = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;

        // Generate SHA-1 signature
        const signature = crypto
            .createHash('sha1')
            .update(signatureString)
            .digest('hex');

        // Prepare form data for deletion
        const formData = new URLSearchParams();
        formData.append('public_id', publicId);
        formData.append('timestamp', timestamp.toString());
        formData.append('api_key', apiKey);
        formData.append('signature', signature);

        // Delete image from Cloudinary
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString(),
            }
        );

        const data = await response.json();

        if (!response.ok || data.result !== 'ok') {
            console.error('Cloudinary deletion error:', data);
            return NextResponse.json(
                { error: 'Failed to delete image from Cloudinary', details: data },
                { status: response.status }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Image deleted successfully',
            result: data,
        });
    } catch (error) {
        console.error('Error deleting from Cloudinary:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
