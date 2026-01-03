import React, { useContext } from 'react';
import { userContext } from './pages/Home';

const User = ({ name }) => {
  const a = useContext(userContext);

  return (
    <div>
      <h3>useContext value: {a}</h3>
      <p>I am {name}</p>
    </div>
  );
};

export default User;
