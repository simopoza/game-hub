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

const useGames = (gameQuery : GameQuery) => useQuery<FetchingData<Game>, Error>({
	queryKey: ['games', gameQuery],
	queryFn: () => 
		apiClient
			.get<FetchingData<Game>>('/games', {
				params: {
					genres: gameQuery.genre?.id, 
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchInput,
				}
			})
			.then(res => res.data),
	enabled: !!gameQuery,
});

export default useGames;
