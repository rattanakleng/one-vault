import React, { useContext, useRef, useEffect } from 'react'
import PasswordContext from '../../context/password/passwordContex'

const PasswordFilter = () => {
  const passwordContext = useContext(PasswordContext)
  const text = useRef('')

  const { filterPasswords, clearFilter, filtered } = passwordContext

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const onChange = e => {
    if (text.current.value !== '') {
      filterPasswords(e.target.value)
    } else {
      clearFilter()
    }
  }

  return (

    <div className="container mb-4">
      <form>
        <input
          className="form-control"
          ref={text}
          type="text"
          placeholder="Filter passwords by name"
          onChange={onChange}
        />
      </form>
    </div>
  )
}

export default PasswordFilter
