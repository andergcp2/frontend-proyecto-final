'use client';

import { Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  const { data: session, update } = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typography variant="h1" component="h1">{t('title')}</ Typography >
      <Typography variant="h2" component="h2">{session?.expires}</ Typography >
      <Typography variant="h2" component="h2">{session?.user.name}</ Typography >
      <Typography variant="h2" component="h2">{session?.user.role}</ Typography >
    </main>
  )
}
