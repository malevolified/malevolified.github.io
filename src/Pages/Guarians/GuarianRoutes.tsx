import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import refSections from "./refSections";

interface IProps {}

const GuarianRoutes: React.FC<IProps> = ({}) => {
  return (
    <Switch>
      {refSections.map((s) => (
        <Route exact key={s.route} path={s.route}>
          {s.content}
        </Route>
      ))}
      <Redirect to={"/guarians"} />
    </Switch>
  );
};

GuarianRoutes.displayName = "GuarianRoutes";
export { GuarianRoutes };
