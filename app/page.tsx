import Conferences from '@/components/conferences';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CONFS_TECH_URL } from './getConferences';

export const metadata: Metadata = {
  title: 'JavaScript Events and Conferences',
  description: 'Tech news from web development world',
  keywords: ['javascript', 'typescript', 'react', 'events', 'conferences'],
  metadataBase: new URL('https://solarczyk.dev'),
};

export const revalidate = 86400; // 24 hours

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 relative">
      <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold drop-shadow-sm dark:drop-shadow-md text-center md:px-48">
        Incoming JavaScript events and conferences
      </h1>
      <Conferences />
      <footer className="flex flex-col items-center justify-center w-full absolute bottom-2">
        <p className="text-gray-500 text-center text-xs md:text-md px-4">
          Data aggregated from{' '}
          <Link
            href={CONFS_TECH_URL}
            className="dark:text-blue-300 dark:hover:text-blue-500 text-blue-600 hover:text-blue-800 transition"
          >
            confs.tech/javascript
          </Link>
          .
        </p>
      </footer>
    </main>
  );
}
