import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchingData } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface genreDate{
	name: string;
}

export interface Game {
  id: number;
  name: string;
	background_image: string;
	parent_platforms: { platform : Platform }[];
	metacritic: number;
	genres: genreDate[];
	rating_top: number;
}

const useGames = (gameQuery : GameQuery) => {
	
	const gameService = new apiClient<Game>('/games', gameQuery);
	return useQuery<FetchingData<Game>, Error>({
	
		queryKey: ['games', gameQuery],
		queryFn: gameService.getData,
		enabled: !!gameQuery,
	});
}

export default useGames;
