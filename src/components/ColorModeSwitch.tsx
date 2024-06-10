import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  
	const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch


    // const { toggleColorMode } = useColorMode()

    // const bg = useColorModeValue('red.500', 'red.200')
    // const color = useColorModeValue('white', 'gray.800')

		      {/* <Button size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button> */}