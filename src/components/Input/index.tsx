import React from "react";
import "./style.css";

interface InputProps {
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  button?: JSX.Element;
}

export const Input: React.FC<InputProps> = props => {
  const { button, ...inputProps } = props;

  return (
    <div className="input-wrapper">
      <input {...inputProps} type="text" className="input-element" />
      {button}
    </div>
  );
};
