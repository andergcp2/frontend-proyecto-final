import * as Yup from 'yup'
import { AssignProjectProps, Project, SearchCandidateRow, searchCandidateParams } from '@/models';
import { GridColDef } from '@mui/x-data-grid';
import { useTranslations } from 'next-intl';
import { assignProject, getCandidatesByCriteria } from '@/services/candidate';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getProjectsByCompanyId } from '@/services/project';
import { getSession } from 'next-auth/react';
import { useFormik } from 'formik';

const useSearchCandidateContext = () => {
  const t = useTranslations('Dashboard.Modules.SearchCandidate')

  // STATES
  const [queryParams, setQueryParams] = useState<string>('')
  const [candidates, setCandidates] = useState<SearchCandidateRow[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false)

  // REACT QUERY
  const getCandidatesData = async () => {
    const response = await getCandidatesByCriteria({ queryParams, page: 1, perPage: 10 })
    return response
  }

  const getProjectByCompanyId = async () => {
    const session = await getSession()
    return await getProjectsByCompanyId(session?.user?.id as string ?? '')
  }

  const { data: candidatesData, isFetching: isFetchingCandidatesData } = useQuery({
    queryKey: ['candidates', queryParams],
    queryFn: getCandidatesData,
    onSuccess: (data) => {
      setCandidates(data.items ?? [])
    },
    onError: (error: any) => {
      console.log(error.message) // TODO Do something
    }
  })

  const { data: projectsData, isFetching: isFetchingProjectsData } = useQuery({
    queryFn: getProjectByCompanyId,
    onSuccess: (data) => {
      setProjects(data ?? [])
    },
    onError: (error: any) => {
      console.log(error.message) // TODO Do something
    }
  })
  // MUTATIONS
  const assingCandidateToProject = async (variables: AssignProjectProps) => {
    const session = await getSession()
    variables.candidateId = session?.user?.id as string ?? ''
    return await assignProject(variables)
  }

  const { mutateAsync: AssingToProjectReq, isLoading: isAssinedToProjectLoading } = useMutation({
    mutationFn: assingCandidateToProject,
    onSuccess: () => {
      console.log('Candidato asignado al proyecto de manera exitosa')
      setOpen(false)
      setOpenModal(true)
    },
    onError: (error: any) => {
      console.log(error.message)
      formik.setErrors({ projectId: error.message })
    }
  })

  // FORM
  const validationSchema = Yup.object({
    role: Yup.string(),
    softSkills: Yup.array(),
    technicalSkills: Yup.array(),
  })

  const headerClassName = 'search-candidate-header'

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70, headerClassName, minWidth: 120 },
    { field: 'name', headerName: 'Names', flex: 1, headerClassName, minWidth: 120 },
    { field: 'lastName', headerName: 'Last Names', flex: 1, headerClassName, minWidth: 120 },
    { field: 'identificationType', headerName: 'ID Type', flex: 1, headerClassName, minWidth: 120 },
    { field: 'identificationNumber', headerName: 'ID Number', flex: 1, headerClassName, minWidth: 120 },
    { field: 'email', headerName: 'Email', flex: 1, headerClassName, minWidth: 120 },
    { field: 'phoneNumber', headerName: 'Phone Number', flex: 1, headerClassName, minWidth: 120 },
    { field: 'country', headerName: 'Country', flex: 1, headerClassName, minWidth: 120 },
    { field: 'city', headerName: 'City', flex: 1, headerClassName, minWidth: 120 },
    { field: 'address', headerName: 'Address', flex: 1, headerClassName, minWidth: 120 },
    { field: 'photo', headerName: 'Photo', flex: 1, headerClassName, minWidth: 120 },
    { field: 'profession', headerName: 'Profession', flex: 1, headerClassName, minWidth: 120 },
  ];

  const rows: SearchCandidateRow[] = candidates.map((candidate) => {
    return {
      id: candidate.id,
      name: candidate.name,
      lastName: candidate.lastName,
      identificationType: candidate.identificationType,
      identificationNumber: candidate.identificationNumber,
      email: candidate.email,
      phoneNumber: candidate.phone,
      country: candidate.country,
      city: candidate.city,
      address: candidate.address,
      photo: candidate.photo,
      profession: candidate.profession,
    }
  })

  // FORMIK
  const formik = useFormik<AssignProjectProps>({
    initialValues: {
      candidateId: "0",
      projectId: "0",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await AssingToProjectReq(values)
    }
  })

  const handleProjectChange = (_: any, value: any) => {
    formik.setFieldValue("projectId", `${value?.id}` || null);
  };

  // METHODS
  const buildParams = ({ role, softSkills, technicalSkills }: searchCandidateParams): string => {
    if (
      !role &&
      (!softSkills || softSkills.length > 0) &&
      (!technicalSkills || technicalSkills.length > 0))
      return ''

    let params = '?'
    if (role) params += `role=${role}&`
    if (softSkills && softSkills.length > 0) {
      softSkills.forEach((softSkill: string) => {
        params += `softskill=${softSkill}&`
      })
    }
    if (technicalSkills && technicalSkills.length > 0) {
      technicalSkills.forEach((technicalSkill: string) => {
        params += `technicalskill=${technicalSkill}&`
      })
    }

    // remove the last &
    params = params.substring(0, params.length - 1)

    return params // TODO Reemplazar los espacios?
  }

  return {
    columns,
    isFetchingCandidatesData,
    isFetchingProjectsData,
    handleProjectChange,
    formik,
    projects,
    rows,
    validationSchema,
    buildParams,
    getCandidatesData,
    setQueryParams,
    t,
    open,
    setOpen,
    openModal,
    setOpenModal,
  }
}

export default useSearchCandidateContext;