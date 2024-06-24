import { List } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreListContainer from "./GenreListContainer";
import GenreListSkeleton from "./GenreListSkeleton";
import GenreListItem from "./GenreListItem";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  // if (isLoading) return <Spinner />;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreListContainer>
            <GenreListSkeleton key={skeleton} />
          </GenreListContainer>
        ))}
      {data.map((genre) => (
        <GenreListContainer>
          <GenreListItem key={genre.id} genre={genre} />
        </GenreListContainer>
      ))}
    </List>
  );
};

export default GenreList;
