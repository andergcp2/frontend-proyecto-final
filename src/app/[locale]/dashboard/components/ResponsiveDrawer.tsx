import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from "react";

const navItems = ['Bienvenido'];
const projectItems = ['Crear Proyectos', 'Resultados entrevistas', 'Candidatos']
const candidateItems = ['Búsqueda de candidatos', 'Gestión de entrevistas', 'Gestión de cantidatos']
const candidateRoutes = ['dashboard/searchCandidate', 'dashboard/searchCandidates', 'dashboard/searchCandidates']
const managementItems = ['Gestión de contratos', 'Gestión de desempeño', 'Gestión de tiempo']


interface Props {
  
}

export default function ResponsiveDrawer(props: Props) {
  
    return (
        <>
            <Toolbar />
                <Divider />
                <Typography variant="h3" noWrap component="div" sx={{ p: 2 }}>
                Empresas
                </Typography>
                <Typography variant="body1" noWrap component="div" sx={{ p: 2 }}>
                Proyectos
                </Typography>
                <List>
                {projectItems.map((text, index) => (
                    <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                    </ListItem>
                ))}
                </List>
                <Divider />
                <Typography variant="body1" noWrap component="div" sx={{ p: 2 }}>
                Candidatos
                </Typography>
                <List>
                {candidateItems.map((text, index) => (
                    <ListItem key={text} disablePadding>
                    <ListItemButton href={candidateRoutes[index]}>
                        <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                    </ListItem>
                ))}
                </List>
                <Divider />
                <Typography variant="body1" noWrap component="div" sx={{ p: 2 }}>
                Gestión de proyectos
                </Typography>
                <List>
                {managementItems.map((text, index) => (
                    <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                    </ListItem>
                ))}
                </List>
        </>
    );
}