import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import ContextsProviders from '@/contexts/contexts-providers';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IP Address Tracker App',
  description: "Track an IP address's location, timezone, and ISP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <ContextsProviders>{children}</ContextsProviders>
      </body>
    </html>
  );
}
