import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Warung Geprek & Mie Ayam - Kelezatan Dalam Setiap Suapan',
  description: 'Warung Geprek & Mie Ayam menyajikan hidangan ayam geprek dan mie ayam dengan cita rasa autentik menggunakan bahan berkualitas dan resep rahasia turun-temurun.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}