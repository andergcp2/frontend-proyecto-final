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
    <Grid
      py={0.5}
      container
      display="flex"
      justifyContent={'flex-end'}
      className='language-selector'
      position={'sticky'}
      top={0}
      minHeight={'60px'}
      sx={{ backgroundColor: 'white', zIndex: 100 }}
    >
      <TextField
        id="toggle-language"
        select
        defaultValue={locale}
        size='small'
        sx={{ marginRight: 3 }}
        disabled={isPending}
        onChange={(event) => onSelectChange(event)}
      >
        {langs.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  )
}

export default LanguageSelector
