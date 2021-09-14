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
  useToast,
} from "@chakra-ui/react";

const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

const CurrencyForm = () => {
  const [currencyRate, setCurrencyRate] = useState("");
  const [currencyExchangeRate, setCurrencyExchangeRate] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [isConverting, setIsConverting] = useState(false);

  const currencyOneInputRef = useRef();
  const currencyTwoInputRef = useRef();
  const currencyAmountRef = useRef();
  const toast = useToast();

  const displayCurrencyTwoHandler = () => {
    return currencyTwoInputRef.current.value;
  };

  const displayCurrencyOneHandler = () => {
    return currencyOneInputRef.current.value;
  };

  const showResultsHandler = () => {
    setShowResults(true);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    setIsConverting(true);

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
      if (response.ok) {
        response.json().then((data) => {
          setIsConverting(false);
          const exchangeRateAmount = data.rates[secondCurrency].rate_for_amount;
          const currencyExchangeRate = data.rates[secondCurrency].rate;
          setCurrencyRate(exchangeRateAmount);
          setCurrencyExchangeRate(currencyExchangeRate);
        });
      } else {
        toast({
          description: "Unable to convert",
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      }
    });
  };

  return (
    <Fragment>
      <Box bg="blue.500" p="4" borderRadius="2xl">
        <form onSubmit={submitFormHandler}>
          <Flex flexDirection="column">
            <FormControl mt="2">
              <FormLabel>Currency 1</FormLabel>
              <Select bg="white" ref={currencyOneInputRef}>
                <option>GBP</option>
                <option>USD</option>
                <option>EUR</option>
                <option>JPY</option>
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
                <option>CAD</option>
                <option>AUD</option>
              </Select>
              <FormHelperText color="white">
                Select a currency you wish to convert to.
              </FormHelperText>
            </FormControl>

            <FormControl mt="2" isRequired>
              <FormLabel>Amount</FormLabel>
              <Input type="text" bg="white" ref={currencyAmountRef}></Input>
              <FormHelperText color="white">Enter the amount.</FormHelperText>
            </FormControl>

            <Flex justifyContent="center" mt="5">
              <Box>
                {!isConverting && (
                  <Button
                    colorScheme="whiteAlpha"
                    size="md"
                    rightIcon={<ArrowForwardIcon />}
                    type="submit"
                    onClick={showResultsHandler}
                  >
                    Convert
                  </Button>
                )}
                {isConverting && (
                  <Button
                    colorScheme="whiteAlpha"
                    size="md"
                    rightIcon={<ArrowForwardIcon />}
                    type="submit"
                    onClick={showResultsHandler}
                    isLoading
                    loadingText="Converting"
                  ></Button>
                )}
              </Box>
            </Flex>
          </Flex>
        </form>
      </Box>

      <Spacer mt="4" />

      {showResults && currencyAmountRef.current.value && (
        <Container w="100%" p="0">
          <Box bg="blue.500" p="3" borderRadius="2xl">
            <Flex justifyContent="center">
              <Box
                bg="white"
                width="100%"
                pt="1"
                pb="1"
                borderRadius="md"
                boxShadow="md"
              >
                <Text textAlign="center">
                  <Text fontWeight="bold">Current Rate</Text>{" "}
                  {displayCurrencyTwoHandler()} {currencyRate}
                </Text>
                <Text textAlign="center">
                  <Text fontWeight="bold">Exchange Rate</Text>{" "}
                  {displayCurrencyTwoHandler()} {currencyExchangeRate} /{" "}
                  {displayCurrencyOneHandler()}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Container>
      )}
    </Fragment>
  );
};

export default CurrencyForm;
