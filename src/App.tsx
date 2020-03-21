import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { UserContextProvider } from "./context";
import { Hello, Chat } from "./views";
import { ValidRoute } from "./components";

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
            <Chat />
          </ValidRoute>
        </Switch>
      </HashRouter>
    </UserContextProvider>
  );
};

export default App;
