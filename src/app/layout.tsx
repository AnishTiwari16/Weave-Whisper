import { ClerkProvider } from '@clerk/nextjs';
import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import BottomBar from '@/components/heroSection/BottomBar';
import LeftSideBar from '@/components/heroSection/LeftSideBar';
import NavBar from '@/components/heroSection/NavBar';
import RightSideBar from '@/components/heroSection/RightSideBar';

import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  authors: [
    {
      name: 'Anish Tiwari',
      url: 'https://anishtiwari.netlify.app/',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className='bg-[#101010] text-white'>
          <NavBar />
          <main className='flex flex-row'>
            <div className='hidden w-3/12 bg-[#121417] md:block '>
              <LeftSideBar />
            </div>
            <section className='w-full'>{children}</section>
            <div className='hidden w-6/12 bg-[#121417] lg:block'>
              <RightSideBar />
            </div>
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
