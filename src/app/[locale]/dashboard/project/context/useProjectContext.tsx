'use client';

import { useMutation } from "@tanstack/react-query";
import { createProject } from "@/services/project";
import { CreateProjectDTO } from "@/models";

const useProjectContext = () => {
  const { mutateAsync: CreateProjectReq, isLoading: isCreateProjectLoading } = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      console.log('Pryecto creado exitosamente')
    },
    onError: (error: any) => {
      console.log(error.message)
    }
  })

  const CreateProject = async (variables: CreateProjectDTO) => {
    await CreateProjectReq(variables)
  }

  return { CreateProject };
}

export default useProjectContext;