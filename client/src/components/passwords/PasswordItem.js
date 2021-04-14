import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import PasswordContext from '../../context/password/passwordContext'

const PasswordItem = ({ password }) => {
  const passwordContext = useContext(PasswordContext)
  const { deletePassword, setCurrent, clearCurrent } = passwordContext

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

  const onDelete = () => {
    deletePassword(_id)
    clearCurrent()
  }

  return (
    <div className="card bg-light">
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
            <span className="font-weight-bold mr-2">Security Answer:</span>{' '}
            {securityAnswer}
          </p>
        )}

        {securityImage && (
          <p className="card-text mx-4">
            <span className="font-weight-bold mr-2">Security Image:</span>{' '}
            {securityImage}
          </p>
        )}

        {other && (
          <p className="card-text mx-4">
            <span className="font-weight-bold mr-2">Other:</span> {other}
          </p>
        )}
      </div>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(password)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  )
}

PasswordItem.propTypes = {
  password: PropTypes.object.isRequired,
}

export default PasswordItem
