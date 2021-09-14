import { Container, Flex } from "@chakra-ui/layout";
import { Button, FormControl, FormLabel, FormHelperText, Select } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Form = () => {
  return (
    <Container maxWidth="container.md" p="5">
      <Flex flexDirection="column">
        <FormControl>
          <FormLabel>Currency 1</FormLabel>
          <Select>
            <option>GBP</option>
            <option>USD</option>
          </Select>
          <FormHelperText>Select a currency you wish to convert</FormHelperText>
        </FormControl>

        <FormControl>
            <FormLabel>Currency 2</FormLabel>
          <Select>
            <option>GBP</option>
            <option>USD</option>
          </Select>
          <FormHelperText>
            Select a currency you wish to convert to
          </FormHelperText>
        </FormControl>
        <Button colorScheme="blue" size="md" rightIcon={<ArrowForwardIcon />}>
          Convert
        </Button>
      </Flex>
    </Container>
  );
};

export default Form;
