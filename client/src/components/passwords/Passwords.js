import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PasswordItem from './PasswordItem';
import Spinner from '../layout/Spinner';
import PasswordContext from '../../context/password/passwordContext';
import { Link } from 'react-router-dom';

const Passwords = () => {
   const passwordContext = useContext(PasswordContext);

   const { passwords, filtered, getPasswords, loading } = passwordContext;

   useEffect(() => {
      getPasswords();
      // eslint-disable-next-line
   }, []);

   if (passwords !== null && passwords.length === 0 && !loading) {
      return (
         <div className='container text-center'>
            <h3 className='mt-5'>There is no password stored!</h3>
            <h4 className='mb-4'>Please create and add a new password!</h4>
            <Link to='/createpassword'>
               <button className='btn btn-secondary mx-auto '>
                  {' '}
                  Add New Password{' '}
               </button>{' '}
            </Link>
         </div>
      );
   }

   return (
      <Fragment>
         {passwords !== null && !loading ? (
            <TransitionGroup>
               {filtered !== null
                  ? filtered.map((password) => (
                       <CSSTransition
                          key={password._id}
                          timeout={500}
                          classNames='item'
                       >
                          <PasswordItem password={password} />
                       </CSSTransition>
                    ))
                  : passwords.map((password) => (
                       <CSSTransition
                          key={password._id}
                          timeout={500}
                          classNames='item'
                       >
                          <PasswordItem password={password} />
                       </CSSTransition>
                    ))}
            </TransitionGroup>
         ) : (
            <Spinner />
         )}
      </Fragment>
   );
};

export default Passwords;
