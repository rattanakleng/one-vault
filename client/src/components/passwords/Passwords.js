import React, { useContext, useEffect } from 'react'
import PasswordContext from '../../context/password/passwordContex';
import PasswordItem from '../passwords/PasswordItem';

import { Row } from '../layout/Grid/Grid';

const Passwords = () => {
  const passwordContext = useContext(PasswordContext)

  const { passwords, filtered, getPasswords, loading } = passwordContext;

  useEffect(() => {
    getPasswords();
    // eslint-disable-next-line
  }, []);

  if (passwords !== null && passwords.length === 0 && !loading) {
    return <h4>Please add a new password item</h4>;
  }

  return (
    <div className="container">
      <Row>
        {passwords.map((password) => (
          <PasswordItem
            key={password.id}
            name={password.name}
            userName={password.userName}
            website={password.website}
            passwordValue={password.passwordValue}
            passwordHint={password.passwordHint}
            securityQuestion={password.securityQuestion}
            securityAnswer={password.securityAnswer}
            securityImage={password.securityImage}
          />
        ))}
      </Row>
    </div>
  )
}

export default Passwords
