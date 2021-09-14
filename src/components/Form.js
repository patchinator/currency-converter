import { Container, Flex } from "@chakra-ui/layout";
import {
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Input,
  Box,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Form = () => {
  return (
    <Container maxWidth="container.md" p="5">
      <Flex flexDirection="column">
        <Flex mt="2">
          <FormControl>
            <FormLabel>Currency 1</FormLabel>
            <Select>
              <option>GBP</option>
              <option>USD</option>
            </Select>
            <FormHelperText>
              Select a currency you wish to convert.
            </FormHelperText>
          </FormControl>
          <FormControl ml="10">
            <FormLabel>Amount</FormLabel>
            <Input type="number"></Input>
            <FormHelperText>Enter the amount.</FormHelperText>
          </FormControl>
        </Flex>

        <Flex mt="2">
          <FormControl>
            <FormLabel>Currency 2</FormLabel>
            <Select>
              <option>GBP</option>
              <option>USD</option>
            </Select>
            <FormHelperText>
              Select a currency you wish to convert to.
            </FormHelperText>
          </FormControl>
          <FormControl ml="10">
            <FormLabel>Amount</FormLabel>
            <Input type="number"></Input>
            <FormHelperText>Enter the amount.</FormHelperText>
          </FormControl>
        </Flex>

        <Flex justifyContent="center" mt="5">
          <Box>
            <Button
              colorScheme="blue"
              size="md"
              rightIcon={<ArrowForwardIcon />}
            >
              Convert
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Form;
