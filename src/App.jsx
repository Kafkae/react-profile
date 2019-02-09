import React, { Fragment } from 'react';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/header/Header';
import Main from './components/main/MainBlock';

const App = () => (
  <Fragment>
    <Header />
    <Main />
    <GlobalStyle />
  </Fragment>
);

export default App;
