import React, { useState } from "react";
import {
  Message,
  MESSAGE_COLOR,
  Input,
  Container,
  Form,
  Button
} from "../components";

interface Message {
  id: string;
  text: string;
  author: string;
  color: MESSAGE_COLOR;
}

interface ChatProps {
  messages: Message[];
}

export const Chat: React.FC<ChatProps> = props => {
  const { messages } = props;

  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div>
      {messages.map(({ author, color, text, id }) => (
        <Message key={id} color={color} author={author}>
          {text}
        </Message>
      ))}
      <Container stickedToBottom padding="s">
        <Form
          onSubmit={() => {
            setValue("");
          }}
        >
          <Input
            value={value}
            onChange={handleChange}
            button={<Button type="submit">Send</Button>}
          />
        </Form>
      </Container>
    </div>
  );
};
