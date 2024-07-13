import { Box, GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import GameThriller from "../components/GameThriller";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2}}
      paddingLeft={5}
      paddingRight={5}
			spacing={5}
    >
			<GridItem>
				<Heading>{game.slug}</Heading>
				<ExpandableText>{game.description_raw}</ExpandableText>
				<GameAttribute game={game} />
			</GridItem>
			<GridItem>
				<GameThriller id={game.id} />
				<GameScreenshots id={game.id} />
			</GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
