import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { screenshots } from "../entities/Screenshotes";


const useScreenshots = (id: number) =>{
	const gameThriller = new apiClient<screenshots>(`/games/${id}/screenshots`);

	return useQuery({
		queryKey: ['screenshots', id],
		queryFn: gameThriller.getData,
	});
}

export default useScreenshots;