'use client';

import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import CustomCard from "./Card";
import { useDashboard } from "../context/dashboardContext";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export interface DashboardContainerProps { }

function CandidateDashboard() {
  const { t, candidateCardsValues } = useDashboard();
  const { push } = useRouter()
  const handleCardActionButton = (navigateTo: string) => {
    push(navigateTo)
  }
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      mt={2}
      p={4}
    >
      <Typography variant="h1" my={5}>{t('candidateTitle')}</ Typography >
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        gap={2}
      >
        {candidateCardsValues.map((card, index) => (
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
  );
}

function AbcDashboard() {
  const { t, abcCardsValues } = useDashboard();
  const { push } = useRouter()
  const handleCardActionButton = (navigateTo: string) => {
    push(navigateTo)
  }
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      mt={2}
      p={4}
    >
      <Typography variant="h1" my={5}>{t('abcTitle')}</ Typography >
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        gap={2}
      >
        {abcCardsValues.map((card, index) => (
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
  );
}

function CompanyDashboard() {
  const { t, cardsValues } = useDashboard();
  const { push } = useRouter()
  const handleCardActionButton = (navigateTo: string) => {
    push(navigateTo)
  }
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      mt={2}
      p={4}
    >
      <Typography variant="h1" my={5}>{t('companyTitle')}</ Typography >
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        gap={2}
      >
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
  );
}

function getUserRole(role: any) {
  switch (role) {
    case 'candidato':
      return <CandidateDashboard />;
    case 'empresa':
      return <CompanyDashboard />;
    case 'abc':
      return <AbcDashboard />;
    default:
      return;
  }
}

const DashboardContainer: FC<DashboardContainerProps> = () => {
  const { t, cardsValues } = useDashboard();
  const { data: session } = useSession();
  const { push } = useRouter()

  const handleCardActionButton = (navigateTo: string) => {
    push(navigateTo)
  }

  return (
    <>
      {getUserRole(session?.user.role)}
    </>
  )
}

export default DashboardContainer;