import './globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeConfig } from '@/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ABC - Final Project',
  description: 'ABC App created as the final project for the MISO Master Degree in the University of Los Andes',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale?: string
  }
}

export default async function RootLayout({
  children,
  params: { locale = 'es' },
}: RootLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ThemeConfig options={{ key: 'mui' }}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeConfig>
      </body>
    </html>
  )
}
