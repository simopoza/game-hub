import axios, { AxiosRequestConfig } from "axios"
import { GameQuery } from "../App";

export interface FetchingData<T>
{
	count: number;
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
  gameQuery?: GameQuery;

  constructor(endPoint: string, gameQuery?: GameQuery){
    this.endPoint = endPoint;
    if (gameQuery) this.gameQuery = gameQuery;
  }

  getData = () => {
    return axiosInstance
            .get<FetchingData<T>>(this.endPoint, {
              params: {
                genres: this.gameQuery?.genre?.id,
                parent_platforms: this.gameQuery?.platform?.id,
                ordering: this.gameQuery?.sortOrder,
                search: this.gameQuery?.searchInput,
              },
            })
            .then(res => res.data)
  }
}

export default apiClient;