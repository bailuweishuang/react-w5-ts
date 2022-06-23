import React from 'react';
// import { add, minus } from 'Utils/math';

import './app.less';

interface IProps {
  name: string;
  age: number;
}

function App(props: IProps) {
  const { name, age } = props;
  console.log(name, 123);
  return (
    <div className="app">
      <span>{name}</span>
      <span>{age}</span>
      {/* <p>{add(1, 2)}</p> */}
    </div>
  );
}

export default App;
