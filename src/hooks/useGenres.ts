import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms";
import apiClient from "../services/api-client";
import { Genre } from "../entities/Genre";

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