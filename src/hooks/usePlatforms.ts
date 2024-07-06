import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";

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
		staleTime: ms("24h"),
		initialData: platforms,
	})
}

export default usePlatfroms;