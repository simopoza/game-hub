import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import GameFilter from "./GameFilter";

interface Props {
  type: string;
}

const GameGrid = ({ type }: Props) => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameFilter key={game.id}>
            {!type && (
              <GameCardContainer key={game.id}>
                {!type && <GameCard game={game} />}
              </GameCardContainer>
            )}
            {game.genres.map(
              (g) =>
                g.name === type && (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                )
            )}
          </GameFilter>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
