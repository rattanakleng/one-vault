/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import PasswordContext from '../../context/password/passwordContext';



const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const passwordContext = useContext(PasswordContext);

  const { isAuthenticated, logout, loadUser } = authContext;
  const { clearPasswords } = passwordContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    clearPasswords();
  };

  const authLinks = (
    <Fragment>
      <li>
        <Link to='/createpassword'>Create Password</Link>
      </li>
      <li>
        <Link to='/'>View Password</Link>
      </li>
      <li>
        <Link to="/login" onClick={onLogout}>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
      
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
 
    </Fragment>
  );

  return (
    <div className='navbar'>
      
        <Link to='/' >
          <img src="./assets/img/one-vault-logo.png" alt="logo" className="nav-logo" height="40"  />
        </Link>
      
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Password Keeper',
  icon: 'fas fa-id-card-alt'
};

export default Navbar;
