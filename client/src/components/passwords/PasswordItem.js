import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import PasswordContext from '../../context/password/passwordContext'
import { Link } from 'react-router-dom'

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
    <div className="card mt-3">
      <div className="card-body p-0 rounded-5">
        <h5 className="card-header rounded-5 m-0 p-2 pl-4">
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
            <a href={website} target="_blank" className="card-text" rel="noreferrer" >
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

      <div className="my-3">
        <Link to='/createpassword'>
        <button className="btn btn-primary py-1 px-3 ml-4"
          onClick={() => setCurrent(password)} >
          Edit
        </button>
        </Link>
        
        <button className="btn btn-secondary py-1 px-2 ml-2 " onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

PasswordItem.propTypes = {
  password: PropTypes.object.isRequired,
}

export default PasswordItem
