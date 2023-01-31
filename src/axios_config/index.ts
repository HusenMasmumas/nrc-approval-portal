import Axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { apiURL } from "config/api";
import i18n from "i18next";

const axios = Axios.create({
  baseURL: apiURL,

  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  validateStatus: (status) => status >= 400,
});

interface AxiosCustomRequestConfig<D = any>
  extends InternalAxiosRequestConfig<D> {
  _retry: boolean;
}

interface AxiosCustomError<T = any, D = any> extends AxiosError<T, D> {
  config: AxiosCustomRequestConfig<D>;
}
const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig<any> => {
  const acToken = localStorage.getItem("access_token");
  config.validateStatus = (_) => true;
  config.headers["Authorization"] = `Bearer ${acToken}`;
  axios.defaults.headers.common["Authorization"] = `Bearer ${acToken}`;

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosCustomError) => {
  if (error.response) {
    if (error.response.status === 403 && error.response.data) {
      return Promise.resolve(error.response.data);
    }
    return Promise.reject(error);
  }
  return Promise.reject(error);
};

axios.interceptors.request.use(onRequest, onRequestError);

axios.interceptors.response.use(onResponse, onResponseError);
export default axios;

export const thrownResponse = (res: AxiosResponse): never => {
  if (res.status === 401) {
    localStorage.clear();
    let url: string = window.location.origin;
    window.location.replace(url + "/#/login");
  }

  throw new Error(
    i18n.language === "th"
      ? res?.data?.message?.TH || res?.data?.message
      : res?.data?.message?.EN || res?.data?.message
  );
};
