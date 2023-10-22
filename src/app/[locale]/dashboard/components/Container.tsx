'use client';

import { Box, Typography } from "@mui/material";
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
    <Box display={"flex"} flexDirection={"column"} m={5} p={4}>
      <Typography variant="h1" my={5}>{t('companyTitle')}</ Typography >
      <Box sx={{ display: 'flex' }} gap={4}>
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
      </ Box>
    </Box>
  )
}

export default DashboardContainer;