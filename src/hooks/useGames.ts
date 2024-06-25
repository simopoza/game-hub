import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

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
}

const useGames = (gameQuery : GameQuery) => 
	useData<Game>('/games', { 
		params: {
			genres: gameQuery.genre?.id, 
			platforms: gameQuery.platform?.id,
			ordering: gameQuery.sortOrder,
		}}, 
		[gameQuery]);
export default useGames;