import React, { useState } from 'react'

const LoginForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const { email, password } = user

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Login Submit')
  }

  return (
    <div className="container px-5">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>

        <div>
          <input
            type="submit"
            value="Login"
            className="btn bg-prussian-blue text-white mx-2"
          />
        </div>
      </form>
    </div>
  )
}

export default LoginForm
