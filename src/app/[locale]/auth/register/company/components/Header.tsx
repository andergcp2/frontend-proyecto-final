'use client'

import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations('Auth.SignUp.Company')
  return (
    <Box marginX={4} display={"flex"} gap={3} alignItems={"baseline"} marginY={3}>
      <Typography variant="h1" color="primary">{t('pageTitle')}</Typography>
      <Typography variant="h3" color="primary">{t('pageSubTitle')}</Typography>
    </Box>

  );
}

export default Header;