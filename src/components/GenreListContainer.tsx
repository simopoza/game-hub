import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreListContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={8} overflow="hidden">
      {children}
    </Box>
  );
};

export default GenreListContainer;
