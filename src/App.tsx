import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { UserContextProvider } from "./context";
import { Hello, Chat } from "./views";
import { ValidRoute } from "./components";

const FAKE_MESSAGES = [
  {
    id: "1",
    text: "Hello",
    author: "Hermione",
    color: "Peter" as const
  },
  {
    id: "2",
    text: "Hello",
    author: "Harry",
    color: "John" as const
  },
  {
    id: "3",
    text: "Hello",
    author: "Ron",
    color: "Steve" as const
  }
];

const App = () => {
  return (
    <UserContextProvider>
      <HashRouter>
        <h1>React Chat App</h1>
        <Switch>
          <Route exact path="/">
            <Hello />
          </Route>
          <ValidRoute exact path="/chat">
            <Chat messages={FAKE_MESSAGES} />
          </ValidRoute>
        </Switch>
      </HashRouter>
    </UserContextProvider>
  );
};

export default App;
