import React, { useContext, useState } from "react";
import { Input, Container, Button, Form } from "../components";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context";

export const Hello = () => {
  const { setName } = useContext(UserContext);
  const { push } = useHistory();

  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = () => {
    setName(value);
    push("/chat");
  };

  return (
    <div>
      <h3>Please tell me what's your name</h3>
      <Container maxWidth="80%">
        <Form onSubmit={handleSubmit}>
          <Input value={value} onChange={handleChange} />
          <br />
          <Button type="submit">Start chatting!</Button>
        </Form>
      </Container>
    </div>
  );
};
