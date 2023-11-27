import { Project } from "@/models"
import { getProjectsByCompanyId } from "@/services/project"
import { GridColDef } from "@mui/x-data-grid"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { useTranslations } from "next-intl"
import { useEffect } from "react"

const useProjectContext = () => {
  const t = useTranslations('Dashboard.Modules.Projects')

  const { data: sessionData, } = useSession()
  let companyId = sessionData?.user?.id

  const getProjectsData = async () => {
    const response = await getProjectsByCompanyId(companyId)
    return response
  }
  const { data: projects, isFetching: isFetchingProjectsData, refetch } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjectsData,
    onError: (error: any) => {
      console.log(error.message)
    },
    enabled: !!companyId,
  })

  const handleRowClick = (params: any) => {
    // redirect to interview page
    // push(`${mainRoutes.dashboard.interview}/${params.row.id}`)
    console.log(params) // TODO: Define wath to do on row click
  }

  // EFFECTS
  useEffect(() => {
    if (companyId) refetch()
  }, [companyId, refetch])

  const rows: Project[] = (projects ?? []).map((project: Project) => {
    return {
      id: project.id,
      name: project.name,
      type: project.type,
      leader: project.leader,
      role: project.role,
      phone: project.phone,
      email: project.email,
      country: project.country,
      city: project.city,
      address: project.address,
    }
  })

  const headerClassName = 'search-candidate-header'
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Names', flex: 1, headerClassName, minWidth: 120 },
    { field: 'type', headerName: 'Type', flex: 1, headerClassName, minWidth: 120 },
    { field: 'leader', headerName: 'Leader', flex: 1, headerClassName, minWidth: 180 },
    { field: 'role', headerName: 'Leader Role', flex: 1, headerClassName, minWidth: 180 },
    { field: 'email', headerName: 'Leader Email', flex: 1, headerClassName, minWidth: 180 },
  ]

  return {
    columns,
    rows,
    isFetchingProjectsData,
    handleRowClick,
    t
  }
}

export default useProjectContext