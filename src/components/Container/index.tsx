import React, { useRef, useState, useEffect } from "react";
import classnames from "classnames";
import "./style.css";

const PADDING_CONFIG = {
  n: "0",
  s: "0.25rem",
  m: "0.5rem",
  l: "1rem"
};

type PADDING = keyof typeof PADDING_CONFIG;

interface ContainerProps {
  stickedToBottom?: boolean;
  maxWidth?: string;
  padding?: PADDING;
}

export const Container: React.FC<ContainerProps> = props => {
  const { children, stickedToBottom, maxWidth = "100%", padding = "n" } = props;

  const ref = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    if (!stickedToBottom || !ref.current) {
      return;
    }

    setHeight(ref.current.clientHeight);
  }, [stickedToBottom]);

  const style = {
    "--max-width": maxWidth,
    "--padding": PADDING_CONFIG[padding]
  } as React.CSSProperties;

  return (
    <>
      <div
        ref={ref}
        className={classnames("container", { stickedToBottom })}
        style={style}
      >
        {children}
      </div>
      {stickedToBottom && height && <div style={{ height }} />}
    </>
  );
};
