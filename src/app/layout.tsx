import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import Starfield from '@/components/Starfield';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: {
    default: 'Space Research Institute - Ghana (SRI-Ghana)',
    template: '%s | SRI-Ghana',
  },
  description: 'Developing the next generation of Ghanaian space scientists, engineers, researchers, and innovators.',
  keywords: [
    'Space Research Institute Ghana',
    'SRI-Ghana',
    'SEPS Ghana',
    'Space Exploration and Physics Society',
    'Space Science Ghana',
    'Heliophysics Africa',
    'Space Physics Ghana',
    'Space Engineering Ghana',
    'Ghana Space Agency',
    'Astronomy Ghana',
    'CubeSat Ghana'
  ],
  authors: [{ name: 'Space Research Institute - Ghana' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sri-ghana.org',
    title: 'Space Research Institute - Ghana (SRI-Ghana)',
    description: 'Advancing space science, engineering, data, and education in Ghana and Africa.',
    siteName: 'SRI-Ghana'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Space Research Institute - Ghana (SRI-Ghana)',
    description: 'Advancing space science, engineering, data, and education in Ghana and Africa.'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Space Research Institute - Ghana',
  alternateName: 'SRI-Ghana',
  url: 'https://sri-ghana.org',
  logo: 'https://sri-ghana.org/image.png',
  description: 'Research, education, innovation, and capacity-building institution dedicated to advancing space science and technology in Ghana.',
  email: 'Samuel.abaidoo@nasa.gov',
  sameAs: [
    'https://www.nasa.gov'
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
          <Starfield fixed variant="light" density={0.85} className="-z-10" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
