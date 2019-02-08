import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import initfire from './api/fireinit';

initfire();

ReactDOM.render(<App />, document.getElementById('root'));
