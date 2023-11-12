export interface Project {
  id: number;
  name: string;
  type?: string;
  leader?: string;
  role?: string;
  phone?: number;
  email?: string;
  country?: string;
  city?: string;
  address?: string;
  profiles?: Profile[];
}

export interface Profile {
  name: string;
  profession: string;
  // softskills: SoftSkill[];
  softskills: string;
  techskills: string;
}

export interface SoftSkill {
  name: string;
}

export type CreateProjectDTO = Omit<Project, "id">;
