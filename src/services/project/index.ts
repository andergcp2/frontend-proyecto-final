import { axiosMethod } from "@/config/http/axios";
import { CreateProjectDTO } from "@/models";
import { Project } from "@/models/project.model";

export const createProject = async (
  params: CreateProjectDTO
): Promise<Project> => {
  const response = await axiosMethod<any>({
    name: "createProject",
    data: {
      ...params,
    },
  });
  return response.data;
};
