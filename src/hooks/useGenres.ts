import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
	name: string;
  image_background: string;
}

const genresService = new apiClient<Genre>('/genres');

const useGenres = () => {

  return useQuery({
   queryKey: ['genres'],
   queryFn: genresService.getData,
   staleTime: ms("24h"),
   initialData: genres,
 });
}

export default useGenres;