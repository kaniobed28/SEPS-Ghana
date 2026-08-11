import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-main' });

export const metadata: Metadata = {
  title: 'SRIG | Space Research Institute Ghana (SRIG)',
  description: 'Space Research Institute Ghana (SRIG). Educating, engaging, and promoting space science and physics in Ghana.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <div className="stars"></div>
          <div className="twinkling"></div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
