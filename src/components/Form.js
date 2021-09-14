import { Container } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

const Form = () => {
  return (
    <Container maxWidth="container.xl" padding="0">
      <form>
        <div>
          <h2>Form</h2>
        </div>
        <div>
          <label htmlFor="">Currency One</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Currency Two</label>
          <input type="text" />
        </div>
        <Button colorScheme="blue" size="md">Convert</Button>
      </form>
    </Container>
  );
};

export default Form;
