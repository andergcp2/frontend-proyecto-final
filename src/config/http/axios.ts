import axios, { AxiosError, AxiosRequestConfig } from "axios";
import Error from "next/error";
import apiConfig from "./config";
import { CreateAxiosMethodProps, URIProps } from "@/models/http-config";
import { getSession } from "next-auth/react";

const axiosInstance = axios.create({
  timeout: 20000,
  headers: {
    //'Access-Control-Allow-Origin': '*',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status == 401) {
      //TODO: Sign-out
      throw new Error({ statusCode: 401, title: "Unauthorized" });
    }

    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  async function (config) {
    const session = await getSession();
    // TODO: Check token when auth is implemented
    if (session) {
      const token = session.user?.IdToken || undefined;
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }

    return config;
  },
  function (error) {
    // Use if needed
    return Promise.reject(error);
  }
);

const endpoints = apiConfig.endpoints;
const baseURL = apiConfig.baseUrl;

const getURI = ({ url, params = {} }: URIProps) => {
  const matches = url.match(/\{params.(\w+)}/g);
  if (matches) {
    matches.forEach((match) => {
      const name = match.replace("{params.", "").replace("}", "");
      url = url.replace(match, params[name] ?? "");
    });
  }
  return url;
};

export const axiosMethod = async <T>(
  reqParams: CreateAxiosMethodProps,
  options?: AxiosRequestConfig
) => {
  const { name, pathParams, ...reqs } = reqParams;
  const endpointObject = endpoints[name];

  return axiosInstance<T>({
    ...(options ?? {}),
    baseURL: endpointObject.baseUrl || baseURL,
    method: endpointObject.method,
    url: getURI({ url: endpointObject.url, params: pathParams }),
    ...reqs,
  });
};
