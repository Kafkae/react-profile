import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Add from '../addprofile/Add';
import Profile from '../profile/Profile';

const MainBlock = () => (
  <Switch>
    <Route path="/add" component={Add} />
    <Route path="/profile" component={Profile} />
  </Switch>
);

export default MainBlock;
