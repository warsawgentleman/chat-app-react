import React from "react";
import "./style.css";

export type MESSAGE_COLOR = "Peter" | "John" | "Steve";

const COLORS = {
  Peter: "#FB1",
  John: "#C55",
  Steve: "#60061E"
};

interface MessageProps {
  color: MESSAGE_COLOR;
  author: string;
}

export const Message: React.FC<MessageProps> = props => {
  const { color, author, children } = props;

  const style = { "--message-color": COLORS[color] } as React.CSSProperties;

  return (
    <div className="message-wrapper" style={style}>
      <span className="message-author">{author}</span>
      <div className="message-content ">{children}</div>
    </div>
  );
};
