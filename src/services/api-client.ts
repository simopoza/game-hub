import axios, { AxiosRequestConfig } from "axios"

export interface FetchingData<T>
{
	count: number;
  next: string | null;
	results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
      key: '406331fea3d644459778480a54bfc7b0',
  },
});

class apiClient<T> {
  endPoint: string;

  constructor(endPoint: string){
    this.endPoint = endPoint;
  }

  getData = (config: AxiosRequestConfig) => {
    return axiosInstance
            .get<FetchingData<T>>(this.endPoint, config)
            .then(res => res.data)
  }

  get = (id: string | number) => {
    return axiosInstance
            .get<T>(this.endPoint + '/' + id)
            .then((res) => res.data)
  }

  getThriller = (id: number) => {
    return axiosInstance
            .get<T>(this.endPoint + '/' + id + '/movies')
            .then(res => res.data);
  }
}

export default apiClient;