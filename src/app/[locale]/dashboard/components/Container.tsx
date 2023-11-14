'use client';

import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import CustomCard from "./Card";
import { useDashboard } from "../context/dashboardContext";
import { useRouter } from "next/navigation";

export interface DashboardContainerProps { }

const DashboardContainer: FC<DashboardContainerProps> = () => {
  const { t, cardsValues } = useDashboard();
  const { push } = useRouter()

  const handleCardActionButton = (navigateTo: string) => {
    push(navigateTo)
  }

  return (
    <Box display={"flex"} flexDirection={"column"} mt={2} p={4}>
      <Typography variant="h1" my={5}>{t('companyTitle')}</ Typography >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3 }}>
        {cardsValues.map((card, index) => (
          <CustomCard
            key={`${index}-${card.title.split(' ').join('-')}`}
            title={card.title}
            subtitle={card.subtitle}
            buttonLabel={card.buttonLabel}
            imageUrl={card.imageUrl}
            description={card.description}
            handleClick={() => handleCardActionButton(card.navigateTo || '/')}
          />
        ))}
      </ Grid>
    </Box>
  )
}

export default DashboardContainer;