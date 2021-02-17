import React from 'react';
import { Route, Switch } from 'react-router-dom';

/*
const exampleRoutes = [
  {
    path: '',
    exact: '',
    component: '',
  },
];
*/

export const TraverseRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route) => {
        return <Route key={route.path} {...route} />;
      })}
    </Switch>
  );
};
