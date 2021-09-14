import { useRef, useState, Fragment } from "react";
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
  Text,
  Spacer,
} from "@chakra-ui/react";

const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

const CurrencyForm = () => {
  const [currencyRate, setCurrencyRate] = useState("");
  const currencyOneInputRef = useRef();
  const currencyTwoInputRef = useRef();
  const currencyAmountRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const firstCurrency = currencyOneInputRef.current.value;
    const secondCurrency = currencyTwoInputRef.current.value;
    const currencyAmount = currencyAmountRef.current.value;

    fetch(
      `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${firstCurrency}&to=${secondCurrency}&amount=${currencyAmount}`,
      {
        method: "GET",
        "Content-Type": "response/json",
        headers: {
          "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
          "x-rapidapi-key": API_KEY,
        },
      }
    ).then((response) => {
      response.json().then((data) => {
        const exchangeRate = data.rates[secondCurrency].rate_for_amount;
        console.log(data)
        setCurrencyRate(exchangeRate);
      });
    });
  };

  return (
    <Fragment>
      <Box bg="orange.500" p="4" borderRadius="2xl">
        <form onSubmit={submitFormHandler}>
          <Flex flexDirection="column">
            <FormControl mt="2">
              <FormLabel>Currency 1</FormLabel>
              <Select bg="white" ref={currencyOneInputRef}>
                <option>GBP</option>
                <option>USD</option>
                <option>EUR</option>
                <option>JPY</option>
                <option>CHF</option>
                <option>CAD</option>
                <option>AUD</option>
              </Select>
              <FormHelperText color="white">
                Select a currency you wish to convert.
              </FormHelperText>
            </FormControl>

            <FormControl mt="2">
              <FormLabel>Currency 2</FormLabel>
              <Select bg="white" ref={currencyTwoInputRef}>
                <option>GBP</option>
                <option>USD</option>
                <option>EUR</option>
                <option>JPY</option>
                <option>CHF</option>
                <option>CAD</option>
                <option>AUD</option>
              </Select>
              <FormHelperText color="white">
                Select a currency you wish to convert to.
              </FormHelperText>
            </FormControl>

            <FormControl mt="2">
              <FormLabel>Amount</FormLabel>
              <Input type="number" bg="white" ref={currencyAmountRef}></Input>
              <FormHelperText color="white">Enter the amount.</FormHelperText>
            </FormControl>

            <Flex justifyContent="center" mt="5">
              <Box>
                <Button
                  colorScheme="green"
                  size="md"
                  rightIcon={<ArrowForwardIcon />}
                  type="submit"
                >
                  Convert
                </Button>
              </Box>
            </Flex>
          </Flex>
        </form>
      </Box>

      <Spacer mt="4" />

      <Container w="100%" p="0">
        <Box bg="orange.500" p="3" borderRadius="2xl">
          <Flex justifyContent="center">
            <Box
              bg="white"
              pl="5"
              pr="5"
              pt="1"
              pb="1"
              borderRadius="md"
              boxShadow="md"
            >
              <Text>{currencyRate}</Text>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Fragment>
  );
};

export default CurrencyForm;
