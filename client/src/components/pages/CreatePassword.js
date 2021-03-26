import React from 'react'
import ContactForm from '../passwords/PasswordForm'

const CreatePassword = () => {
  return (
    <div className="bg-beau-blue min-vh-100">
      <h1 className="text-center py-5">Create New Password </h1>
      <div className="container px-5">
        <ContactForm />
      </div>
    </div>
  )
}

export default CreatePassword
