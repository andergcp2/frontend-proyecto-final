import { Candidate, SearchCandidateRow } from "@/models";

const candidates: Candidate[] = [
  {
    id: 1,
    names: "Juan",
    lastNames: "Perez",
    identificationType: "CC",
    identificationNumber: "123456789",
    email: "juan@mail.com",
    phoneNumber: "123456789",
    country: "Colombia",
    city: "Medellin",
    address: "Calle 123",
    photo: "https://picsum.photos/200/300",
    profession: "Ingeniero",
    softskills: [
      {
        id: 1,
        name: "Trabajo en equipo",
        level: 5,
      },
      {
        id: 2,
        name: "Comunicación",
        level: 4,
      },
    ],
    technicalSkills: [
      {
        id: 1,
        name: "Java",
        level: 5,
      },
      {
        id: 2,
        name: "Python",
        level: 4,
      },
    ],
    username: "juanperez",
    password: "123456",
    termsAndConditions: true,
    privacyPolicy: true,
  },
  {
    id: 2,
    names: "Maria",
    lastNames: "Gomez",
    identificationType: "CC",
    identificationNumber: "123456789",
    email: "maria@mail.com",
    phoneNumber: "123456789",
    country: "Colombia",
    city: "Medellin",
    address: "Calle 123",
    photo: "https://picsum.photos/200/300",
    profession: "Ingeniero",
    softskills: [
      {
        id: 1,
        name: "Trabajo en equipo",
        level: 5,
      },
      {
        id: 2,
        name: "Comunicación",
        level: 4,
      },
    ],
    technicalSkills: [
      {
        id: 1,
        name: "Java",
        level: 5,
      },
      {
        id: 2,
        name: "Python",
        level: 4,
      },
    ],
    username: "mariagomez",
    password: "123456",
    termsAndConditions: true,
    privacyPolicy: true,
  },
  {
    id: 3,
    names: "Pedro",
    lastNames: "Ramirez",
    identificationType: "CC",
    identificationNumber: "123456789",
    email: "pedro@mail.com",
    phoneNumber: "123456789",
    country: "Colombia",
    city: "Medellin",
    address: "Calle 123",
    photo: "https://picsum.photos/200/300",
    profession: "Ingeniero",
    softskills: [
      {
        id: 1,
        name: "Trabajo en equipo",
        level: 5,
      },
      {
        id: 2,
        name: "Comunicación",
        level: 4,
      },
    ],
    technicalSkills: [
      {
        id: 1,
        name: "Java",
        level: 5,
      },
      {
        id: 2,
        name: "Python",
        level: 4,
      },
    ],
    username: "pedroramirez",
    password: "123456",
    termsAndConditions: true,
    privacyPolicy: true,
  },
  {
    id: 4,
    names: "Ana",
    lastNames: "Gutierrez",
    identificationType: "CC",
    identificationNumber: "123456789",
    email: "ana@mail.com",
    phoneNumber: "123456789",
    country: "Colombia",
    city: "Medellin",
    address: "Calle 123",
    photo: "https://picsum.photos/200/300",
    profession: "Ingeniero",
    softskills: [
      {
        id: 1,
        name: "Trabajo en equipo",
        level: 5,
      },
      {
        id: 2,
        name: "Comunicación",
        level: 4,
      },
    ],
    technicalSkills: [
      {
        id: 1,
        name: "Java",
        level: 5,
      },
      {
        id: 2,
        name: "Python",
        level: 4,
      },
    ],
    username: "anagutierrez",
    password: "123456",
    termsAndConditions: true,
    privacyPolicy: true,
  },
];

export default candidates;

export const candidatesCreated = [
  {
    softSkills: [
      {
        skill: "Teamwork",
      },
      {
        skill: "Communication",
      },
    ],
    technicalSkills: [
      {
        skill: "Back-End Development",
      },
      {
        skill: "Cloud Computing",
      },
    ],
    id: 1,
    name: "Alexandra",
    lastName: "Suarez",
    idType: "CC",
    identification: "1234567",
    email: "alexaSz1@mail.com",
    phone: "1234567890",
    country: "Colombia",
    city: "Bogota",
    address: "Calle 123",
    profession: "Systems Engineer",
    username: "alexaSz1",
    createdAt: "2023-11-12T23:26:05.081973",
  },
  {
    softSkills: [
      {
        skill: "Problem Solving",
      },
    ],
    technicalSkills: [
      {
        skill: "Programming Languages",
      },
      {
        skill: "Database Management",
      },
    ],
    id: 2,
    name: "Jose",
    lastName: "Ramirez",
    idType: "CC",
    identification: "1234567",
    email: "j.ramirez@mail.com",
    phone: "1234567890",
    country: "Colombia",
    city: "Bogota",
    address: "Calle 123",
    profession: "Software Engineer",
    username: "joseRmrz1",
    createdAt: "2023-11-13T00:02:40.809445",
  },
  {
    softSkills: [
      {
        skill: "Problem Solving",
      },
    ],
    technicalSkills: [
      {
        skill: "Communication",
      },
    ],
    id: 3,
    name: "Andres",
    lastName: "Martinez",
    idType: "CC",
    identification: "1234567",
    email: "a.martinez@mail.com",
    phone: "1234567890",
    country: "Colombia",
    city: "Bogota",
    address: "Calle 123",
    profession: "Software Engineer",
    username: "amartinez1",
    createdAt: "2023-11-13T00:03:57.406308",
  },
];

// export const testsCreated =
