import React from "react";
import "./style.css";

interface MessageProps {
  color: string;
  author: string;
}

export const Message: React.FC<MessageProps> = props => {
  const { color, author, children } = props;

  const style = { "--message-color": color } as React.CSSProperties;

  return (
    <div className="message-wrapper" style={style}>
      <span className="message-author">{author}</span>
      <div className="message-content ">{children}</div>
    </div>
  );
};
