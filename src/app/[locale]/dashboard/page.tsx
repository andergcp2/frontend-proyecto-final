'use client';

import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typography variant="h1" component="h1">{t('title')} - Prueba</ Typography >
    </div>
  )
}
