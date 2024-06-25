import { HStack, Image } from "@chakra-ui/react";
import gamesLogo from "../assets/logo.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchInput: string) => void;
}

const NavBar = ({ onSearch }: Props) => {

  return (
    <HStack padding='10px'>
      <Image src={gamesLogo} boxSize="60px" />
      <SearchInput onSearchValue={(input) => onSearch(input)}/>
			<ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
