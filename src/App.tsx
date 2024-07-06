import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchInput: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area={"nav"}>
        <NavBar onSearch={(searchInput) => setGameQuery({...gameQuery, searchInput})}/>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList selectedGenreId={gameQuery.genreId} onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id})}/>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={9}>
          <GameHeading gameQuery={gameQuery}/>
          <HStack>
            <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery ,platformId: platform.id})}/>
            <SortSelector selectedOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
