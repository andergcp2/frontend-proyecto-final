import { axiosMethod } from "@/config/http/axios";
import {
  Test,
  TestDone,
  TestInitProps,
  TestNext,
  TestNextProps,
} from "@/models/test.model";

export const getTests = async (): Promise<Test[]> => {
  const response = await axiosMethod({
    name: "getTests",
  });
  return response.data as Test[];
};

export const testInit = async ({
  candidateId,
  testId,
}: TestInitProps): Promise<TestNext> => {
  const response = await axiosMethod({
    name: "testInit",
    pathParams: {
      candidateId: candidateId.toString(),
      testId: testId.toString(),
    },
  });
  return response.data as TestNext;
};

export const testNext = async ({
  totalQuestions,
  numQuestion,
  questionId,
  answerId,
  candidateId,
  testId,
}: TestNextProps): Promise<TestNext> => {
  const response = await axiosMethod({
    name: "testNext",
    pathParams: {
      candidateId: candidateId.toString(),
      testId: testId.toString(),
    },
    data: { totalQuestions, numQuestion, questionId, answerId },
  });
  return response.data as TestNext;
};

export const testDone = async ({
  totalQuestions,
  numQuestion,
  questionId,
  answerId,
  candidateId,
  testId,
}: TestNextProps): Promise<TestDone> => {
  const response = await axiosMethod({
    name: "testDone",
    pathParams: {
      candidateId: candidateId.toString(),
      testId: testId.toString(),
    },
    data: { totalQuestions, numQuestion, questionId, answerId },
  });
  return response.data as TestDone;
};
