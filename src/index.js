import React from 'react';
// import ReactDOM from 'react-dom';
import App from './app';
import { createRoot } from 'react-dom/client';

if (module && module.hot) {
  module.hot.accept();
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App name="小时" age={12} />);
// ReactDOM.render(<App />, document.querySelector('#root'));
