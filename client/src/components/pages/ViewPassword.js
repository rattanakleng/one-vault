import React from 'react';
import Passwords from '../passwords/Passwords';

const Home = () => {
   return (
      <div className='min-vh-100 mt-0 bg-beau-blue pb-5'>
         <div className='container pt-5 px-5'>
            <h3 className='text-center mb-5'>All Passwords</h3>
            <Passwords />
         </div>
      </div>
   );
};

export default Home;
