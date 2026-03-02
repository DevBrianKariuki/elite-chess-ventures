'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InteractiveChessBackground from '@/components/InteractiveChessBackground';

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith('/admin');

    if (isAdminRoute) {
        return <>{children}</>;
    }

    return (
        <>
            <InteractiveChessBackground />
            <div className="relative z-10">
                <Header />
                <div className="pt-16 md:pt-20">{children}</div>
                <Footer />
            </div>
        </>
    );
}
