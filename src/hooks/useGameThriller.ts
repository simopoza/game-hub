import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Thriller } from "../entities/GameThiller";



const useGameThriller = (id: number) =>{
	const gameThriller = new apiClient<Thriller>(`/games/${id}/movies`);

	return useQuery({
		queryKey: ['Thrillers', id],
		queryFn: gameThriller.getData,
	});
}

export default useGameThriller;