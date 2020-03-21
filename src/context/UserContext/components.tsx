import React, { useState } from "react";
import {
  UserContext,
  DEFAULT_USER_CONTEXT,
  USER_COLOR,
  USER_NAME
} from "./context";

export const UserContextProvider: React.FC = props => {
  const { children } = props;

  const [name, setName] = useState<USER_NAME>(DEFAULT_USER_CONTEXT.name);
  const [color, setColor] = useState<USER_COLOR>(DEFAULT_USER_CONTEXT.color);
  const [savaData, setSaveData] = useState(DEFAULT_USER_CONTEXT.savaData);

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        color,
        setColor,
        savaData,
        setSaveData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
