import { Divider, Toolbar } from "@mui/material";
import { useSession } from "next-auth/react";
import CandidateSideBar from "./sideBars/CandidateSidebar";
import CompanySideBar from "./sideBars/CompanySidebar";
import AbcSideBar from "./sideBars/AbcSidebar";

const navItems = ['Bienvenido'];
const projectItems = ['Crear Proyectos', 'Resultados entrevistas', 'Candidatos']
const candidateItems = ['Búsqueda de candidatos', 'Gestión de entrevistas', 'Gestión de cantidatos']
const candidateRoutes = ['dashboard/searchCandidate', 'dashboard/searchCandidates', 'dashboard/searchCandidates']
const managementItems = ['Gestión de contratos', 'Gestión de desempeño', 'Gestión de tiempo']

function getUserRole(role: any) {
    switch (role) {
        case 'candidato':
            return <CandidateSideBar />;
        case 'empresa':
            return <CompanySideBar />;
        case 'abc':
            return <AbcSideBar />;
        default:
            return;
    }
}

interface Props { }

export default function ResponsiveDrawer(props: Props) {
    const { data: session, update } = useSession();

    return (
        <>
            <Toolbar />
            <Divider />
            {getUserRole(session?.user.role)}
        </>
    );
}