import { Platform } from "./Platform";
import { genreDate } from "../hooks/useGames";


export interface Game {
	id: number;
	name: string;
	slug: string;
	description_raw: string;
	background_image: string;
	parent_platforms: { platform: Platform; }[];
	metacritic: number;
	genres: genreDate[];
	rating_top: number;
}
