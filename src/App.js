import CurrencyForm from "./components/CurrencyForm";
import { Fragment } from "react";
import { Container } from "@chakra-ui/layout";
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Container maxWidth="md" p="4">
        <Header />
        <CurrencyForm />
      </Container>
    </Fragment>
  );
}

export default App;
