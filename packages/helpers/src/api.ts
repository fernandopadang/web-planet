import { default as BaseAxios, AxiosInstance, AxiosRequestConfig } from 'axios';
import interceptorAxios from './interceptor';

export interface ResponseModel{ status: {}; data: any; }
interface DefaultProps{
  url: string;
  method: string;
  data?: any;
  auth?: boolean;
  fullUrl?: boolean;
  credential?: boolean;
  responseType?:  "arraybuffer" | "blob" | "document" | "json" | "text" | "stream" | undefined;
  timeout?: number;
}

export default async (props: DefaultProps) => {
  const { url, method, data, fullUrl, credential, responseType, timeout } = props;
  const axiosConfig: AxiosRequestConfig = {
    timeout: 10000,
    withCredentials: false,
  };
  const API_URL : string = "";
  const API = fullUrl ? url : `${API_URL}/${url}` ;

  let headers = {
    'Content-Type': 'application/json',
  };

  if (credential) {
    axiosConfig.withCredentials = true;
  }
  const axios : AxiosInstance = BaseAxios.create(axiosConfig);

  // Interceptors
  interceptorAxios({axios});
  // End Interceptors

  switch (method) {
    case 'get': {
      const response = await axios.get(`${API}`, { params: data, headers, responseType, timeout });
      return response.data;
    }
    case 'post': {
      const response = await axios.post(`${API}`, data, {headers});
      return response.data;
    }
    case 'put': {
      const response = await axios.put(`${API}`, data, {headers});
      return response.data;
    }
    case 'delete': {
      const response = await axios.delete(`${API}`, { params: data, headers });
      return response.data;
    }
    case 'patch': {
      const response = await axios.patch(`${API}`, data, {headers});
      return response.data;
    }
    default:
  }
};