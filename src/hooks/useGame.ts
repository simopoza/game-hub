import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Game } from "../entities/Game";

const gameDescription = new apiClient<Game>('/games');

const useGame = (slug: string) =>  useQuery({
    queryKey: ['games', slug],
    queryFn: () => gameDescription.get(slug),
  });

export default useGame;