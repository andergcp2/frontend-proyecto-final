import { TestNext } from "@/models";

export const TestMocked: TestNext = {
  pruebaId: 1,
  candidatoId: 123,
  totalQuestions: 10,
  numQuestion: 1,
  question: {
    id: 101,
    question: "What is Node.js used for?",
  },
  answers: [
    {
      id: 1,
      answer: "Building user interfaces",
    },
    {
      id: 2,
      answer: "Server-side scripting",
    },
    {
      id: 3,
      answer: "Machine learning",
    },
    {
      id: 4,
      answer: "Database management",
    },
  ],
};
