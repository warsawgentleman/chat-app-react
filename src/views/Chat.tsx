import React, { useState } from "react";
import { Message, Input, Container, Form, Button } from "../components";
import { MessagesContainer } from "../containers";

interface ChatProps {}

export const Chat: React.FC<ChatProps> = props => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (send: (val: string) => void) => () => {
    send(value);
    setValue("");
  };

  return (
    <MessagesContainer>
      {({ messages, send }) => (
        <>
          {messages.map(({ id, name, color, content }) => (
            <Message key={id} color={color} author={name}>
              {content}
            </Message>
          ))}
          <Container stickedToBottom padding="s">
            <Form onSubmit={handleSubmit(send)}>
              <Input
                value={value}
                onChange={handleChange}
                button={<Button type="submit">Send</Button>}
              />
            </Form>
          </Container>
        </>
      )}
    </MessagesContainer>
  );
};
