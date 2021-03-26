import React, {useContext} from 'react'
import RegisterForm from '../RegisterForm/RegisterForm'


const Register = () => {

    return (
        <div  className="bg-baby-blue min-vh-100">
            <h1 className="text-center mt-5">Account Register</h1>
            <RegisterForm />
        </div>
    )
}

export default Register
