import axios from "axios"

export interface FetchingData<T>
{
	count: number;
	results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
      key: '406331fea3d644459778480a54bfc7b0',
  },
});