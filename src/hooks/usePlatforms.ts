import { useQuery } from "@tanstack/react-query";
import { FetchingData } from "./useGames";
import apiClient from "../services/api-client";

interface Platfrom {
  id: number;
	name: string;
	slug: string;
}

// const usePlatfroms = () => useData<Platfrom>('platforms/lists/parents');

const usePlatfroms = () => useQuery({
	queryKey: ['platforms'],
	queryFn: () => 
		apiClient
			.get<FetchingData<Platfrom>>('platforms/lists/parents')
			.then(res => res.data),
	staleTime: 24 * 60 * 60 * 1000,// 24h
	// initialData: {pla}
})

export default usePlatfroms;