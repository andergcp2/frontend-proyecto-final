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
}

export type CreateProjectDTO = Omit<Project, "id">;
