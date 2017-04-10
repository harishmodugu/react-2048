import React from 'react';
import ReactDOM from 'react-dom';
import docReady from 'doc-ready';
import Main from 'components/MainContainer.js';

docReady(() => {
  const rootContainer = document.getElementById('root');
  ReactDOM.render(<Main/>, rootContainer);
});

