'use client';

import { AuthProvider } from '@/context/AuthContext';
import PageLoader from '@/components/PageLoader';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <PageLoader />
            {children}
        </AuthProvider>
    );
}
