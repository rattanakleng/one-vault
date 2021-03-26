import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Col } from '../layout/Grid/Grid'
import PasswordContext from '../../context/password/passwordContex'

const PasswordItem = (password) => {
  const {
    _id,
    name,
    userName,
    website,
    passwordValue,
    passwordHint,
    securityQuestion,
    securityAnswer,
    securityImage,
    other,
  } = password

  const passwordContext = useContext(PasswordContext);
  const { deletePassword, setCurrent, clearCurrent } = passwordContext;
  
  const onDelete = () => {
    deletePassword(_id);
    clearCurrent();
  };

  return (
    <Col size="md-6 sm-6">
      <div className="card rounded-0 mt-3">
        <div className="card-body p-1">
          <h5 className="card-header bg-pale-spring rounded-0 pl-4">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h5>

          <p className="card-text mx-4 mt-3">
            <span className="font-weight-bold mr-2">User Name:</span> {userName}
          </p>

          <p className="card-text mx-4">
            <span className="font-weight-bold mr-2">Password:</span>{' '}
            {passwordValue}
          </p>

          {website && (
            <p className="card-text mx-4">
              <span className="font-weight-bold mr-2">Website: </span>
              <a href={website} target="_blank" className="card-text">
                {website}
              </a>
            </p>
          )}

          {passwordHint && (
            <p className="card-text mx-4">
              <span className="font-weight-bold mr-2">Password Hint:</span>{' '}
              {passwordHint}
            </p>
          )}

          {securityQuestion && (
            <p className="card-text mx-4">
              <span className="font-weight-bold mr-2">Security Question:</span>{' '}
              {securityQuestion}
            </p>
          )}

          {securityAnswer && (
            <p className="card-text mx-4">
              <span className="font-weight-bold mr-2">Security Question:</span>{' '}
              {securityAnswer}
            </p>
          )}

          {securityImage && (
            <p className="card-text mx-4">
              <span className="font-weight-bold mr-2">Security Question:</span>{' '}
              {securityImage}
            </p>
          )}

          {other && (
            <p className="card-text mx-4">
              <span className="font-weight-bold mr-2">Security Question:</span>{' '}
              {other}
            </p>
          )}

          <button
            className="btn border-prussian-blue mx-2 mb-3 float-right "
            onClick={onDelete}
          >
            Delete
          </button>

          <button className="btn bg-prussian-blue text-white mb-3 float-right" onClick={() => setCurrent(password)} >
            Update
          </button>
        </div>
      </div>
    </Col>
  )
}

PasswordItem.propTypes = {
  password: PropTypes.object.isRequired,
}

export default PasswordItem
