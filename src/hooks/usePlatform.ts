import usePlatfroms from "./usePlatforms";

const usePlatform = (id?: number) => {
	const { data: platforms } = usePlatfroms();
	return platforms?.results.find((p) => p.id === id);
}

export default usePlatform;