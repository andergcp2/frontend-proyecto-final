import { useRouter } from "next/router";
import { CustomCardProps } from "../components/Card";
import { useTranslations } from "next-intl";

const useDashboardContext = () => {
  const t = useTranslations('Dashboard');

  const cardsValues: CustomCardProps[] = [
    {
      title: "Proyectos",
      subtitle: "Proyectos de mi empresa",
      buttonLabel: "Acceder",
      imageUrl: "https://img.freepik.com/free-photo/business-people-are-brainstorming_53876-137640.jpg?w=1380&t=st=1698003517~exp=1698004117~hmac=1d9d737118726f9e66163dee2648ac8a63dd19e7dedeb2d1bb7374efce927d0b",
      description: "En esta sección puedas ver los proyectos de tu empresa y gestionarlos",
      navigateTo: '/dashboard/project'
    },
    {
      title: "Administración",
      subtitle: "Administra tu cuenta",
      buttonLabel: "Acceder",
      imageUrl: "https://img.freepik.com/free-photo/creative-group-discussing-ideas-project-boardroom_74855-3367.jpg?w=1380&t=st=1698006278~exp=1698006878~hmac=204261e5a172eca0ba855612a550e0c3403fb10ffaf8ada5ee411133156e6dc2",
      description: "En esta sección puedes administrar tu cuenta",
      navigateTo: '/dashboard/administration'
    },
  ];
  return {
    cardsValues,
    t
  }
};

export default useDashboardContext;