import { axiosMethod } from "@/config/http/axios";
import { CreateProjectDTO } from "@/models";
import { Project } from "@/models/project.model";
import { profile } from "console";

export const createProject = async (
  params: CreateProjectDTO
): Promise<Project> => {
  const response = await axiosMethod<any>({
    name: "createProject",
    data: {
      ...params,
      company: 123,
      country: "CO",
      city: "11001",
      profiles: params.profiles.map((profile) => ({
        ...profile,
        softskills: [
          {
            name: "Comunicación",
            id: 1,
          },
          {
            name: "Trabajo en equipo",
            id: 2,
          },
        ],
        techskills: [
          {
            name: "React",
            id: 1,
          },
          {
            name: "Python",
            id: 2,
          },
        ],
        tests: [],
        // softskills: profile.softskills.split(','),
        // techskills: profile.techskills.split(','),
      })),
    },
  });
  return response.data;
};
