import useData from "./useData";

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

const useGames = () => useData<Game>('/games')
export default useGames;