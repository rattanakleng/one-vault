import React, { useState, useContext, useEffect } from 'react'
import PasswordContext from '../../context/password/passwordContext'

const PasswordForm = () => {
  const passwordContext = useContext(PasswordContext)

  const { addPassword, updatePassword, clearCurrent, current } = passwordContext

  useEffect(() => {
    if (current !== null) {
      setPassword(current)
    } else {
      setPassword({
        name: '',
        userName: '',
        website: '',
        passwordValue: '',
        passwordHint: '',
        securityQuestion: '',
        securityAnswer: '',
        securityImage: '',
        other: '',
      })
    }
  }, [passwordContext, current])

  const [password, setPassword] = useState({
    name: '',
    userName: '',
    website: '',
    passwordValue: '',
    passwordHint: '',
    securityQuestion: '',
    securityAnswer: '',
    securityImage: '',
    other: '',
  })

  const {
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

  const onChange = (e) =>
    setPassword({ ...password, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (current === null) {
      addPassword(password)
    } else {
      updatePassword(password)
    }
    clearAll()
  }

  const clearAll = () => {
    clearCurrent()
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Edit Password' : 'Add Password'}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="User Name"
        name="userName"
        value={userName}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Password"
        name="passwordValue"
        value={passwordValue}
        onChange={onChange}
      />

      <input
        type="text"
        placeholder="Website"
        name="website"
        value={website}
        onChange={onChange}
      />

      <input
        type="text"
        placeholder="Password Hint"
        name="passwordHint"
        value={passwordHint}
        onChange={onChange}
      />

      <input
        type="text"
        placeholder="Security Question"
        name="securityQuestion"
        value={securityQuestion}
        onChange={onChange}
      />

      <input
        type="text"
        placeholder="Security Answer"
        name="securityAnswer"
        value={securityAnswer}
        onChange={onChange}
      />

      <input
        type="text"
        placeholder="Security Image"
        name="securityImage"
        value={securityImage}
        onChange={onChange}
      />

      <textarea
        type="text"
        placeholder="Other"
        name="other"
        value={other}
        onChange={onChange}
      />

      <div>
        <input
          type="submit"
          value={current ? 'Update Password' : 'Add Password'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  )
}

export default PasswordForm
