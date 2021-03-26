import React from 'react'
import { Row, Col } from '../layout/Grid/Grid'

const PasswordItem = ({
  name,
  userName,
  website,
  passwordValue,
  passwordHint,
  securityQuestion,
  securityAnswer,
  securityImage,
  other
}) => {
  return (
    <Col size="md-6 sm-6">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-header">{name.charAt(0).toUpperCase() + name.slice(1)}</h5>
          <p>
            <strong>User Name:</strong> {userName}
          </p>
          <p className="card-text">
            <strong>Password:</strong> {passwordValue}
          </p>
          {website && 
            <p>
              <strong>Website: </strong>
              <a href={website} target="_blank" className="card-text">
                {website}
              </a>
            </p>
          }

          {passwordHint && 
            <p className="card-text">
              <strong>Password Hint:</strong> {passwordHint}
            </p>
          }

{securityQuestion && <p classNameName="card-text">
            <strong>Security Question:</strong> {securityQuestion}
          </p>}
          
          {securityAnswer && <p classNameName="card-text">
            <strong>Security Question:</strong> {securityAnswer}
          </p>}

          {securityImage && <p classNameName="card-text">
            <strong>Security Question:</strong> {securityImage}
          </p>}
          {other && <p classNameName="card-text">
            <strong>Security Question:</strong> {other}
          </p>}

          <a href="/" className="btn btn-primary">
            Update
          </a>
          <a href="/" className="btn btn-danger mx-2">
            Delete
          </a>
        </div>
      </div>
    </Col>
  )
}

export default PasswordItem