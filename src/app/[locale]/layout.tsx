import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next'

import { ThemeConfig } from '@/config'
import Providers from '@/config/Providers';

import { Amplify } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import Toast from '@/components/toast/Toast';

Amplify.configure(awsconfig);

const APP_NAME = 'ABC Jobs';
const APP_DEFAULT_TITLE = 'ABC Criollos App';
const APP_TITLE_TEMPLATE = '%s - ABC Criollos App';
const APP_DESCRIPTION = 'ABC App created as the final project for the MISO Master Degree in the University of Los Andes';

export const metadata: Metadata = {
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: APP_DEFAULT_TITLE,
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: 'black',
  icons: {
    icon: '/icon-512x512.png',
    shortcut: '/icon-512x512.png',
    apple: '/apple-icon-180.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  openGraph: {
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    locale: 'es_CO',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
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
      <body>
        <ThemeConfig options={{ key: 'mui' }}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers>
              {children}
              <Toast />
            </Providers>
          </NextIntlClientProvider >
        </ThemeConfig>
      </body>
    </html>
  )
}
