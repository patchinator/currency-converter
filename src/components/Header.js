import { Container, Box, Text } from "@chakra-ui/layout";

const Header = () => {
  return (
    <Container width="100%" p="0">
      <Box bgColor="blue.500" mb="5" textAlign="center" borderRadius="2xl">
        <Text fontSize="xx-large" color="white" pb="1">Currency Converter</Text>
      </Box>
    </Container>
  );
  
}

export default Header;