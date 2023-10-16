import { AxiosRequestConfig, Method } from "axios";

export interface ParamsProps {
  [name: string]: string | undefined;
}

export interface CreateAxiosMethodProps extends AxiosRequestConfig<unknown> {
  name: string;
  pathParams?: ParamsProps;
}

export interface Endpoint {
  url: string;
  method: Method;
  baseUrl?: string;
}

export interface EndpointsProps {
  [name: string]: Endpoint;
}

export interface ApiConfig {
  baseUrl?: string;
  endpoints: EndpointsProps;
}

export interface URIProps {
  url: string;
  params?: ParamsProps;
}
