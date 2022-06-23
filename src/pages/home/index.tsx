import React from 'react';
import { useParams } from 'react-router-dom';

function Home() {
  let params = useParams();
  console.log(params, 123);
  return <div>123</div>;
}
export default Home;
