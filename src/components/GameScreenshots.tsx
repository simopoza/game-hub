import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots"

interface Props{
	id: number;
}

const GameScreenshots = ({ id }: Props) => {
	const {data, isLoading, error} = useScreenshots(id);

	if (isLoading) return null;

	if (error) throw error;

	if (!data?.results) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2}} spacing={2}>
			{data.results.map((d) => <Image key={d.id} src={d.image} />)}
		</SimpleGrid>
  )
}

export default GameScreenshots