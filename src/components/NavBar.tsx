import { HStack, Image } from "@chakra-ui/react";
import gamesLogo from "../assets/logo.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {

  return (
    <HStack padding='10px'>
      <Image src={gamesLogo} boxSize="60px" />
      <SearchInput />
			<ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
