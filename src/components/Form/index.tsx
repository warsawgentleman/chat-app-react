import React from "react";

interface FormProps {
  onSubmit?: () => void;
  className?: string;
}

export const Form: React.FC<FormProps> = props => {
  const { children, onSubmit, className } = props;

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit?.();
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};
