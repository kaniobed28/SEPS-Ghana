import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

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
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
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
