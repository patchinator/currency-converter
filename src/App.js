import CurrencyForm from "./components/CurrencyForm";
import { Fragment } from "react";
import { Container } from "@chakra-ui/layout";

function App() {
  return (
    <Fragment>
      <Container maxWidth="md" p="4">
        <CurrencyForm />
      </Container>
    </Fragment>
  );
}

export default App;
