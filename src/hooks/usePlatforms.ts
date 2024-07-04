import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchingData } from "../services/api-client";

export interface Platform {
  id: number;
	name: string;
	slug: string;
}

const usePlatfroms = () => useQuery({
	queryKey: ['platforms'],
	queryFn: () => 
		apiClient
			.get<FetchingData<Platform>>('platforms/lists/parents')
			.then(res => res.data),
	staleTime: 24 * 60 * 60 * 1000,// 24h
	// initialData: {pla}
})

export default usePlatfroms;