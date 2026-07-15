import type { Metadata } from 'next';
import './globals.css';
import './components/Pages.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ScrollReveal from './components/ScrollReveal';

export const metadata: Metadata = {
  title: {
    default: 'Mazen Mohsen | Backend Engineer & Product Developer',
    template: '%s | Mazen Mohsen',
  },
  description:
    'I build premium web applications, AI-powered systems, and cross-platform products for startups and agencies. Specializing in ASP.NET Core, React, Flutter, and OpenAI integrations.',
  keywords: [
    'ASP.NET Core Developer',
    'Product Engineer',
    'Full-Stack Developer',
    'React Developer',
    'Flutter Developer',
    'AI Integration',
    'Cairo Egypt',
    'Freelance Developer',
    'Clean Architecture',
  ],
  authors: [{ name: 'Mazen Mohsen', url: 'https://mazen.dev' }],
  creator: 'Mazen Mohsen',
  metadataBase: new URL('https://portfoliomazen.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfoliomazen.vercel.app',
    title: 'Mazen Mohsen | Backend Engineer & Product Developer',
    description:
      'I build products that feel expensive — scalable ASP.NET Core systems, React interfaces, and AI integrations for startups globally.',
    siteName: 'Mazen Mohsen Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mazen Mohsen — Backend Engineer & Product Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mazen Mohsen | Backend Engineer & Product Developer',
    description: 'I build products that feel expensive.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mazen Mohsen',
  jobTitle: 'Backend Engineer & Product Developer',
  url: 'https://portfoliomazen.vercel.app',
  email: 'mazen.mohsen.dev@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'Egypt',
  },
  knowsAbout: [
    'ASP.NET Core',
    'C#',
    'React',
    'Next.js',
    'Flutter',
    'SQL Server',
    'Entity Framework Core',
    'Clean Architecture',
    'OpenAI API',
    'Computer Vision',
    'YOLO',
    'SignalR',
    'Redis',
  ],
  sameAs: [
    'https://github.com/mazen67m',
    'https://www.linkedin.com/in/mazen-mohsen-560823345',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Floating cursor (desktop only) */}
        <Cursor />

        {/* Scroll reveal observer */}
        <ScrollReveal />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main id="main-content">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
