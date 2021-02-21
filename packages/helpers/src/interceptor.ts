import { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

interface InterceptorModel{
  axios: AxiosInstance;
}

export default (props: InterceptorModel) => {
  const { axios } = props;
  const blocker = document.getElementById('blocker') as HTMLElement;
  axios.interceptors.request.use(
    (configAxios: AxiosRequestConfig) => {
      blocker?.classList.add("active");
      document.body.classList.add("hidden");
      return configAxios;
    },
    (errorAxios: AxiosError) => {
      return Promise.reject(errorAxios);
    }
  );
  axios.interceptors.response.use(
    (responseAxios: AxiosResponse) => {
      blocker?.classList.remove("active");
      document.body.classList.remove("hidden");
      return responseAxios;
    },
    (errorAxios: AxiosError) => {
      blocker?.classList.remove("active");
      document.body.classList.remove("hidden");
      return Promise.reject(errorAxios);
    }
  );
};