import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingCTA } from '@/components/ui/FloatingCTA';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Smart Brains - Brain Training Institute | Cognitive Development Programs',
  description: 'Structured brain training programs for kids, teens, and adults. DMIT, Midbrain Activation, Photographic Memory, Speed Reading, Abacus Math and more.',
  keywords: 'brain training, cognitive development, DMIT, midbrain activation, photographic memory, speed reading, abacus math, vedic math',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}