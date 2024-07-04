import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const platformService = new apiClient<Platform>('platforms/lists/parents');

const usePlatfroms = () => {
	return useQuery({
		queryKey: ['platforms'],
		queryFn: platformService.getData,
		staleTime: 24 * 60 * 60 * 1000,// 24h
		// initialData: {pla}
	})
}

export default usePlatfroms;