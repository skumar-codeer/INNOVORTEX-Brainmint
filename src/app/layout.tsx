import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { COMPANY_NAME, BRAND_TAGLINE, BRAND_POSITIONING } from '@/lib/constants';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | ${BRAND_POSITIONING}`,
  description: `${BRAND_TAGLINE} INNOVORTEX builds privacy-conscious Edge AI systems that transform conventional surveillance into intelligent, real-time safety infrastructure.`,
  keywords: [
    'Edge AI',
    'SafeEdge',
    'Computer Vision',
    'Raspberry Pi 5',
    'Perimeter Safety',
    'Intelligent Technology',
    'Privacy-Conscious AI',
    'Multimodal Alert System',
  ],
  authors: [{ name: COMPANY_NAME }],
  openGraph: {
    title: `${COMPANY_NAME} — ${BRAND_POSITIONING}`,
    description: BRAND_TAGLINE,
    url: 'https://innovortex.com',
    siteName: COMPANY_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} — ${BRAND_POSITIONING}`,
    description: BRAND_TAGLINE,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-brand-dark text-white font-body antialiased flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
