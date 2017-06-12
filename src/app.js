import React from 'react';
import ReactDOM from 'react-dom';

const Root = ({ children }) => {
  return <div>{children}</div>
};

ReactDOM.render(
  <Root />,
  document.getElementById('mount')
);
