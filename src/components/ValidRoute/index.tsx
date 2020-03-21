import React, { useContext } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { UserContext } from "../../context";

export const ValidRoute: React.FC<RouteProps> = props => {
  const { children, ...rest } = props;
  const { name } = useContext(UserContext);

  return <Route {...rest}>{name ? children : <Redirect to="/" />}</Route>;
};
