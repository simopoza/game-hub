import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools"

interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder?: string;
	searchInput?: string;
}

interface GameQueryStore {
	gameQuery: GameQuery;
	setSortOrder: (order: string) => void;
	setSearchInput: (input: string) => void;
	setPlatformId: (platformId: number) => void;
	setGenreId: (genreId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
	gameQuery: {},
	setSearchInput: searchInput => set(() => ({ gameQuery: { searchInput } })),
	setSortOrder: sortOrder => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
	setPlatformId: platformId => set((store) => ({ gameQuery: { ...store.gameQuery, platformId }})),
	setGenreId: genreId => set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
}));

if (process.env.NODE_ENV === 'development')
	mountStoreDevtool('Game Store', useGameQueryStore)

export default useGameQueryStore;