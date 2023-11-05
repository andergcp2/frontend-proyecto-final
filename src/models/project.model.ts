export interface Project {
  id: number;
  name: string;
  type: string;
  responsibleName: string;
  role: string;
  phone: number;
  email: string;
  country: string;
  city: string;
  address: string;
  profiles: Profile[];
}

export interface Profile {
  rolName: string;
  profession: string;
  softSkills: SoftSkill[];
  techSkills: string;
}

export interface SoftSkill {
  name: string;
}

export type CreateProjectDTO = Omit<Project, "id">;
