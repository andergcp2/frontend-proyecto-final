import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import PersonSearch from '@mui/icons-material/PersonSearch';
import { useSession } from "next-auth/react";
import { AddBox, Folder, QuestionAnswer } from "@mui/icons-material";
import { usePathname } from "next/navigation";

const routeLink = {
  createProject: "/dashboard/project",
  searchCandidates: "/dashboard/searchCandidate",
  interviews: "/dashboard/interview",
  manageCandidates: "/dashboard/manageCandidates",
}

interface Props { }

export default function CompanySideBar(props: Props) {
  const t = useTranslations("Sidebar.Company");
  const { data: session } = useSession();
  const router = usePathname()

  console.log("Pathname: " + router)
  return (
    <>
      <Typography variant="h3" noWrap component="div" sx={{ p: 2 }}>
        {session?.user.name}
      </Typography>
      <Typography variant="body1" noWrap component="div" sx={{ p: 2 }}>
        {t('projects')}
      </Typography>
      <List>
        <ListItem key="createProject" disablePadding>
          <ListItemButton href={`${routeLink.createProject}`}>
            <ListItemIcon>
              <AddBox />
            </ListItemIcon>
            <ListItemText primary={t('createProject')} />
          </ListItemButton>
        </ListItem>
        <ListItem key="myProjects" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Folder />
            </ListItemIcon>
            <ListItemText primary={t('myProjects')} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Typography variant="body1" noWrap component="div" sx={{ p: 2 }}>
        {t('candidates')}
      </Typography>
      <List>
        <ListItem key="searchCandidates" disablePadding>
          <ListItemButton href={`${routeLink.searchCandidates}`}>
            <ListItemIcon>
              <PersonSearch />
            </ListItemIcon>
            <ListItemText primary={t('searchCandidates')} />
          </ListItemButton>
        </ListItem>
        <ListItem key="interviews" disablePadding>
          <ListItemButton href={`${routeLink.interviews}`}>
            <ListItemIcon>
              <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary={t('interviews')} />
          </ListItemButton>
        </ListItem>
        <ListItem key="manageCandidates" disablePadding>
          <ListItemButton href={`${routeLink.manageCandidates}`}>
            <ListItemIcon>
              <PersonSearch />
            </ListItemIcon>
            <ListItemText primary={t('manageCandidates')} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}