import React from 'react';
import ReactDOM from 'react-dom';
import docReady from 'doc-ready';
import HelloWorld from 'components/HelloWorld.js';

docReady(() => {
  const rootContainer = document.getElementById('root');
  ReactDOM.render(<HelloWorld />, rootContainer);
});

