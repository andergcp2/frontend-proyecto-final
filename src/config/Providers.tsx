'use client'

import React, { useState } from 'react'
import {
  QueryClientProvider,
  QueryClient,
  MutationCache,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AuthProvider } from '@/app/[locale]/auth/context/AuthContext'
import { SessionProvider } from 'next-auth/react'
import { AxiosError } from 'axios'
import { useToast } from '@/context/Toast.context'
import { useTranslations } from 'next-intl'

function Providers({ children }: React.PropsWithChildren) {
  const { showToast } = useToast()
  const t = useTranslations('Errors')
  const [client] = useState(
    new QueryClient({
      mutationCache: new MutationCache({
        onError(error) {
          if (error instanceof AxiosError && error.response?.data) {
            showToast(t(error.response?.data.error_code ?? '00'), 'error')
          } else {
            showToast(t('00'), 'error')
          }
        },
      }),
    }),
  )

  return (
    <QueryClientProvider client={client}>
      <SessionProvider>
        <AuthProvider>{children}</AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </SessionProvider>
    </QueryClientProvider>
  )
}

export default Providers
