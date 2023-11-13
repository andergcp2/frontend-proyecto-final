'use client'

import { ChangeEvent, FC, useTransition } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'
import { Grid, MenuItem, TextField } from '@mui/material'

interface LanguageSwitcherProps { }

const LanguageSelector: FC<LanguageSwitcherProps> = () => {
  const [isPending, startTransition] = useTransition()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function onSelectChange(
    event: ChangeEvent<
      HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
    >,
  ) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  const langs = [
    {
      value: 'en',
      code: 'us',
      label: 'English',
    },
    {
      value: 'es',
      code: 'es',
      label: 'Español',
    },
  ]

  return (
      <TextField
        id="toggle-language"
        select
        defaultValue={locale}
        size='small'
        label = "Lang"
        sx={{ color: "inherit"}}
        disabled={isPending}
        onChange={(event) => onSelectChange(event)}
      >
        {langs.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
  )
}

export default LanguageSelector
