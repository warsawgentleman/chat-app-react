import React, { useState, useEffect, useContext } from "react";
import openSocket from "socket.io-client";
import { UserContext } from "../context";
import { generateId, getMainColor } from "../utils";

interface Message {
  id: number;
  name: string;
  color: string;
  content: string;
}

interface InjectedProps {
  messages: Message[];
  send: (content: string) => void;
}

interface MessagesContainerProps {
  children: (props: InjectedProps) => JSX.Element;
}

const socket = openSocket("http://localhost:5000/");

const MESSAGE_EVENT = "chat_message";

export const MessagesContainer: React.FC<MessagesContainerProps> = props => {
  const { children } = props;
  const { name } = useContext(UserContext);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on(MESSAGE_EVENT, (res: Message) => {
      setMessages(prevMessages => [...prevMessages, res]);
    });
  }, []);

  const send = (content: string) => {
    const color = getMainColor();
    const id = generateId();
    socket.emit(MESSAGE_EVENT, { id, content, name, color });
  };

  return children({ messages, send });
};
