import { Button, HStack, Image, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {

    // const { toggleColorMode } = useColorMode()

    // const bg = useColorModeValue('red.500', 'red.200')
    // const color = useColorModeValue('white', 'gray.800')
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
      {/* <Button size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button> */}
    </HStack>
  );
};

export default NavBar;
