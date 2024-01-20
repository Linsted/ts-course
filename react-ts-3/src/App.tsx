import { useRef } from "react";

import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";

function App() {
  // const inputRef = useRef<HTMLInputElement>(null);

  const formRef = useRef<FormHandle>(null);

  const handleSave = (value: unknown) => {
    const extractedData = value as { text: string; age: string };

    console.log(extractedData);
    formRef.current?.clear();
  };
  return (
    <main>
      {/* <Button el="button" type="button">
        A button
      </Button>
      <Button el="link" href="https://google.com">
        A link
      </Button>
      <Container as={Input}>Input Label</Container>
      <Input id="text" label="label" ref={inputRef} /> */}
      <Form onSave={handleSave} ref={formRef}>
        <Input id="text" label="text" type="text" />
        <Input id="age" label="age" type="text" />
        <Button el="button" type="submit">
          Submit
        </Button>
      </Form>
    </main>
  );
}

export default App;
