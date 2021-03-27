import React from 'react'
import Passwords from '../../components/passwords/Passwords'
import PasswordFilter from '../passwords/PasswordFilter'
const ViewPassword = () => {
  return (
    <div className="bg-light-gray pt-4">
      <h1 className="text-center my-5"> All Passwords </h1>
      <PasswordFilter />
      <Passwords />
    </div>
  )
}

export default ViewPassword
