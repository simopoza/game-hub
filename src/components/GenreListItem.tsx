import { Card, HStack, Image, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGenres";

interface Props {
  genre: Genre;
}

const GenreListItem = ({ genre }: Props) => {
  return (
      <ListItem key={genre.id} paddingY="5px">
        <HStack>
          <Image
            boxSize={"28px"}
            borderRadius={8}
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Text fontSize="lg">{genre.name}</Text>
        </HStack>
      </ListItem>
  );
};

export default GenreListItem;
