import { Box, Flex, Container } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";

const Results = () => {
  return (
    <Container w="100%" p="0">
      <Box bg="orange.500" p="3" borderRadius="2xl">
        <Flex justifyContent="center">
          <Box bg="white" pl="5" pr="5" pt="1" pb="1" borderRadius="md" boxShadow="md">
            <Text>$20</Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Results;
