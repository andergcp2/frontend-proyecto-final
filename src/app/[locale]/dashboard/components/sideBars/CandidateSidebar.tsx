import { Quiz } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

const routeLink = {
  assignedTests: "/dashboard/candidateTest",
}

interface Props { }

export default function CandidateSideBar(props: Props) {
  const t = useTranslations("Sidebar.Candidate")
  const { data: session } = useSession()

  return (
    <>
      <Typography variant="h3" noWrap component="div" sx={{ p: 2 }}>
        {session?.user.name}
      </Typography>
      <Typography variant="body1" noWrap component="div" sx={{ p: 2 }}>
        {t('tests')}
      </Typography>
      <List>
        <ListItem key="assignedTests" disablePadding>
          <ListItemButton href={`${routeLink.assignedTests}`}>
            <ListItemIcon>
              <Quiz />
            </ListItemIcon>
            <ListItemText primary={t('assignedTests')} />
          </ListItemButton>
        </ListItem>
      </List>
    </>

  );
}
