import React from 'react';
import Passwords from '../passwords/Passwords';
import PasswordFilter from '../passwords/PasswordFilter';

const Home = () => {
  return (
      <div className="container">
        <PasswordFilter />
        <Passwords />
      </div>

  );
};

export default Home;
