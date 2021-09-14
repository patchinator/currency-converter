import { Box, Text, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bgColor="blue.500" mb="5" borderRadius="2xl" width="100%">
      <Flex flexDirection="row" justifyContent="space-around" alignItems="center">
        <Text fontSize="xx-large" color="white" pb="1">
          Currency Converter
        </Text>
        <Button onClick={toggleColorMode}>{colorMode}</Button>
      </Flex>
    </Box>
  );
};

export default Header;
