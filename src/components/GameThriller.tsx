import { AspectRatio } from "@chakra-ui/react";
import useGameThriller from "../hooks/useGameThriller";

interface Props {
  id: number;
}

const GameThriller = ({ id }: Props) => {
  const { data, isLoading, error } = useGameThriller(id);

  if (isLoading) return null;

  if (error) throw error;

  if (!data?.results[0]) return null;

  return (
    <AspectRatio ratio={1}>
      <iframe
        title="Thriller"
        src={data?.results[0].data.max}
        allowFullScreen
      />
    </AspectRatio>
  );
};

export default GameThriller;
