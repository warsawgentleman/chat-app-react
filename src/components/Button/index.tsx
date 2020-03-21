import React from "react";
import "./style.css";

export const Button: React.FC<React.ButtonHTMLAttributes<{}>> = props => (
  <button {...props} className="button" />
);
