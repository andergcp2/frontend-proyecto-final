import { AssignmentReturn, PersonSearch, UploadFile } from "@mui/icons-material";
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

const routeLink = {
  testLoad: "/dashboard/questionsBank",
  assignTest: "/dashboard/assignTest",
  searchCandidates: "/dashboard/searchCandidate"
}

interface Props{}

export default function AbcSideBar(props: Props) {
    const t = useTranslations("Sidebar.Abc")
    const { data: session } = useSession();
    
    return (
          <>
            <Typography variant="h3" noWrap component="div" sx={{ p: 2 }}>
              {session?.user.name}
            </Typography>
            <Typography variant="body1" noWrap component="div" sx={{ p: 2 }}>
              {t('tests')}
            </Typography>
            <List>
                <ListItem key="loadTests" disablePadding>
                <ListItemButton href={routeLink.testLoad}>
                    <ListItemIcon>
                      <UploadFile />
                    </ListItemIcon>
                    <ListItemText primary={t('testLoad')} />
                </ListItemButton>
                </ListItem>
                <ListItem key="assignTest" disablePadding>
                <ListItemButton href={routeLink.assignTest}>
                    <ListItemIcon>
                      <AssignmentReturn />
                    </ListItemIcon>
                    <ListItemText primary={t('assignTest')} />
                </ListItemButton>
                </ListItem>
            </List>
          </>
          
    );
}