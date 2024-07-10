import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient, { FetchingData } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

export interface genreDate{
	name: string;
}

const gameService = new apiClient<Game>('/games');

const useGames = () => {
	const gameQuery = useGameQueryStore(s => s.gameQuery);

	return useInfiniteQuery<FetchingData<Game>, Error>({
		queryKey: ['games', gameQuery],
		queryFn: ({ pageParam = 1 }) => 
			gameService.getData({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchInput,
					page: pageParam,
				}
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
		enabled: !!gameQuery,
		staleTime: ms("24h"),
	});
}

export default useGames;
