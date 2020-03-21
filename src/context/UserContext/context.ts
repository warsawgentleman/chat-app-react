import { createContext } from "react";

export type USER_NAME = string | null;
export type USER_COLOR = string | null;

export interface UserContext {
  name: USER_NAME;
  setName: (name: USER_NAME) => void;
  color: USER_COLOR;
  setColor: (color: USER_COLOR) => void;
  savaData: boolean;
  setSaveData: (saveInLocalStorage: boolean) => void;
}

export const DEFAULT_USER_CONTEXT = {
  name: null,
  setName: () => {},
  color: null,
  setColor: () => {},
  savaData: false,
  setSaveData: () => {}
};

export const UserContext = createContext<UserContext>(DEFAULT_USER_CONTEXT);
