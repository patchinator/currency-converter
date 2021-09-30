import { Container, Flex } from "@chakra-ui/layout";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Input,
  Box,
} from "@chakra-ui/react";

const Form = () => {
  return (
    <Container maxWidth="container.md" p="5">
      <Box bg="orange.500" p="4" borderRadius="2xl">
        <Flex flexDirection="column">
          <Flex mt="2">
            <FormControl>
              <FormLabel>Currency 1</FormLabel>
              <Select bg="white">
                <option>GBP</option>
                <option>USD</option>
              </Select>
              <FormHelperText color="white">
                Select a currency you wish to convert.
              </FormHelperText>
            </FormControl>
            <FormControl ml="10">
              <FormLabel>Amount</FormLabel>
              <Input type="number" bg="white"></Input>
              <FormHelperText color="white">Enter the amount.</FormHelperText>
            </FormControl>
          </Flex>

          <Flex mt="2">
            <FormControl>
              <FormLabel>Currency 2</FormLabel>
              <Select bg="white">
                <option>GBP</option>
                <option>USD</option>
              </Select>
              <FormHelperText color="white">
                Select a currency you wish to convert to.
              </FormHelperText>
            </FormControl>
            <FormControl ml="10">
              <FormLabel>Amount</FormLabel>
              <Input type="number" bg="white"></Input>
              <FormHelperText color="white">Enter the amount.</FormHelperText>
            </FormControl>
          </Flex>

          <Flex justifyContent="center" mt="5">
            <Box>
              <Button
                colorScheme="green"
                size="md"
                rightIcon={<ArrowForwardIcon />}
              >
                Convert
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Form;
