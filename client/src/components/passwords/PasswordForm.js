import React, { useState, useContext } from 'react'
import PasswordContext from '../../context/password/passwordContex'

const PasswordForm = () => {
  const passwordContext = useContext(PasswordContext)
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

  const onChange = (event) =>
    setPassword({ ...password, [event.target.name]: event.target.value })

  const onSubmit = (event) => {
    event.preventDefault()
    passwordContext.addPassword(password)
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

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />

        <input
          className="form-control mb-3"
          type="text"
          placeholder="User name"
          name="userName"
          value={userName}
          onChange={onChange}
        />

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Password"
          name="passwordValue"
          value={passwordValue}
          onChange={onChange}
        />

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Website"
          name="website"
          value={website}
          onChange={onChange}
        />

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Password hint"
          name="passwordHint"
          value={passwordHint}
          onChange={onChange}
        />

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Security Answer"
          name="securityAnswer"
          value={securityAnswer}
          onChange={onChange}
        />

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Security question"
          name="securityQuestion"
          value={securityQuestion}
          onChange={onChange}
        />

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Security image"
          name="securityImage"
          value={securityImage}
          onChange={onChange}
        />

        <textarea
          class="form-control mb-3"
          type="text"
          name="other"
          value={other}
          placeholder="Other"
          rows="2"
          onChange={onChange}
        ></textarea>

        <div>
          <input
            type="submit"
            vlaue="Save"
            className="btn bg-prussian-blue text-white mx-2"
          />
        </div>
      </form>
    </>
  )
}

export default PasswordForm
