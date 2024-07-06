import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatfroms, { Platform } from "../hooks/usePlatforms"

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatformId?: number;
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatform } : Props) => {
	const {data, error} = usePlatfroms();
	const	platform = data?.results.find((p) => p.id === selectedPlatformId);
	if (error) return null;
  return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown/>}>{platform?.name || 'Platform'}</MenuButton>
			<MenuList>
				{data?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
			</MenuList>
		</Menu>
  )
}

export default PlatformSelector