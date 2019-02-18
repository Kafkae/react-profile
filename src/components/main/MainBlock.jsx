import React from 'react';
import { Switch, Route } from 'react-router';
import Add from '../addprofile/Add';
import Profile from '../profile/Profile';
import NotFound from '../NotFound';

const MainBlock = () => (
  <Switch>
    <Route path="/add" component={Add} />
    <Route path="/" component={Profile} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default MainBlock;
