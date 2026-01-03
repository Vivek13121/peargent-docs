import type { Metadata } from 'next';
import { HomeLayout } from '@/components/layout/home';

export const metadata: Metadata = {
  title: 'Peargent',
  description: 'Building powerful Python AI agents, made simple.',
  openGraph: {
    title: 'Peargent',
    description: 'Building powerful Python AI agents, made simple.',
    images: [
      {
        url: 'https://peargent.online/banner.png',
        width: 1200,
        height: 630,
        alt: 'Building powerful Python AI agents, made simple.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peargent',
    description: 'Building powerful Python AI agents, made simple.',
    images: ['https://peargent.online/banner.png'],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  const homeOptions = {
    nav: {
      title: <span className="font-semibold text-gray-900" style={{ fontFamily: 'var(--font-instrument-serif), serif', fontSize: '2.1rem' }}>
        peargent.
      </span>,
      transparentMode: 'always' as 'always' | 'top' | 'none',
    },
    links: [
      {
        text: 'Docs',
        url: '/docs',
      },
      {
        text: 'GitHub',
        url: 'https://github.com/Peargent/peargent',
        external: true,
      },
    ],
  };

  return (
    <HomeLayout {...homeOptions}>
      {children}
    </HomeLayout>
  );
}
