'use client';

import Button from "@/components/button/Button";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useRouter } from "next/router";
import { FC } from "react";

export interface CustomCardProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  imageUrl: string;
  description: string;
  navigateTo?: string;
  handleClick?: () => void;
}
const CustomCard: FC<CustomCardProps> = ({
  title,
  subtitle,
  buttonLabel,
  imageUrl,
  description,
  navigateTo,
  handleClick
}) => {
  // const { push } = useRouter()
  return (
    <Card sx={{ backgroundColor: "theme.palette.background.default", maxWidth: "40%" }}>
      <CardContent>
        <Typography variant={'h2'}>
          {title}
        </Typography>
        <Typography variant={'body1'} sx={{ mb: 1.5 }} color="text.secondary">
          {subtitle}
        </Typography>
        <CardMedia
          sx={{ height: 140 }}
          image={imageUrl}
          title={title}
        />
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ marginBottom: 1 }}>
        <Button
          variant="contained" sx={{ mt: 3, mb: 2, fontWeight: 600 }}
          onClick={handleClick}
        >
          {buttonLabel}
        </Button>
      </CardActions>
    </Card >
  );
}

export default CustomCard;