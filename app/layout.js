import Head from 'next/head'; // Import Head component from next/hea
import { Inter } from 'next/font/google';
import './globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Providers } from './context/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ZOYO',
  description: 'Decentralized Ride-Hailing system',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['nextjs', 'nextjs13', 'next13', 'pwa', 'next-pwa'],
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Theme color meta tag */}
        {metadata.themeColor && (
          metadata.themeColor.map(({ media, color }, index) => (
            <meta key={index} name="theme-color" media={media} content={color} />
          ))
        )}
      </Head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
