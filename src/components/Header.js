import { Box, Text, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("blue.500", "blue.800")}
      mb="5"
      borderRadius="2xl"
      width="100%"
    >
      <Flex
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Text
          color="white"
          pb="2"
          pt="1"
          bgGradient="linear(to-l, white, gray.200)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
        >
          Currency Converter
        </Text>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
