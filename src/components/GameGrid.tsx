import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface game {
  id: number;
  name: string;
}

interface fetchingGameData {
  count: number;
  results: game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<fetchingGameData>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
			{error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
