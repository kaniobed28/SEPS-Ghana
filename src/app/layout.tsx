import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-main' });

export const metadata: Metadata = {
  title: 'SEPS-Ghana | Space Exploration and Physics Society',
  description: 'Space Exploration and Physics Society – Ghana (SEPS-Ghana). Educating, engaging, and promoting space science and physics in Ghana.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
