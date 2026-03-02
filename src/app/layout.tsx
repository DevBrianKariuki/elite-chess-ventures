import type { Metadata } from 'next';
import { Playfair_Display, Inter, Montserrat } from 'next/font/google';
import { Providers } from '@/components/Providers';
import { ConditionalLayout } from '@/components/ConditionalLayout';
import './globals.css';

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['600', '700', '800'],
    variable: '--font-heading',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-body',
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600', '700'],
    variable: '--font-accent',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Elite Chess Ventures | Professional Chess Coaching in Kenya',
    description: "Building Kenya's next generation of strategic thinkers through professional chess coaching programs for schools and students.",
    keywords: 'chess coaching Kenya, chess lessons Nairobi, school chess programs, chess tournaments Kenya',
    icons: {
        icon: '/images/logo.ico',
        shortcut: '/images/logo.ico',
        apple: '/images/logo.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} ${montserrat.variable}`}>
            <body className="font-body antialiased">
                <Providers>
                    <ConditionalLayout>
                        {children}
                    </ConditionalLayout>
                </Providers>
            </body>
        </html>
    );
}
