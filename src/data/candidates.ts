// Create an array of candidates 10 with the next data:
// id: number;
// names: string;
// lastNames: string;
// identificationType: string;
// identificationNumber: string;
// email: string;
// phoneNumber: string;
// country: string;
// city: string;
// address: string;
// photo: string;
// profession: string;
// softskills: CandidateSoftSkill[];
// technicalSkills: CandidateTechnicalSkill[];
// username: string;
// password: string;
// termsAndConditions: boolean;
// privacyPolicy: boolean;

import { Candidate } from "@/models";

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
