import { Game } from "../entities/Game";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      overflow="hidden"
      _hover={{
        cursor: "pointer",
        transform: "scale(1.05)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

//<Emoji rating={game.rating_top}/>
