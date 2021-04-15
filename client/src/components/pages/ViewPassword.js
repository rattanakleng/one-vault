import React from 'react';
import Passwords from '../passwords/Passwords';
import PasswordFilter from '../passwords/PasswordFilter';

const Home = () => {
  return (
      <div className="min-vh-100 bg-pale-spring mt-0bg-beau-blue">
        <div className="container pt-5">

        <PasswordFilter />
        <Passwords />
        </div>
        
      </div>

  );
};

export default Home;
