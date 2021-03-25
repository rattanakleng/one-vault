import React, { useReducer } from 'react'
import uuid from 'uuid'
import PasswordContext from './passwordContex'
import passwordReducer from './passwordReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types'

const PasswordState = (props) => {
  const initialState = {
    passwords: [
      {
        id: 1,
        name: 'Home Depot',
        userName: 'HomeDepotUserName',
        website: 'https://www.homedepot.com',
        passwordValue: 'homedepot123',
        passwordHint: 'general pattern',
        securityQuestion: 'What stree were you born',
        securityAnswer: '180',
        securityImage: 'chicken',
      },
      {
        id: 3,
        name: 'Lowes',
        userName: 'LowesUserName',
        website: 'https://www.lowes.com',
        passwordValue: 'lowes123',
        passwordHint: 'general pattern',
        securityQuestion: 'What stree were you born',
        securityAnswer: '280',
        securityImage: 'spacNeedle',
      },
      {
        id: 4,
        name: 'Wayfair',
        userName: 'WayfairUserName',
        website: 'https://www.wayfair.com',
        passwordValue: 'wayfair123',
        passwordHint: 'general pattern',
        securityQuestion: 'What stree were you born',
        securityAnswer: '380',
        securityImage: 'loveSeat',
      },
    ],
  }

  const [state, dispatch] = useReducer(passwordReducer, initialState)

  // Add Password

  // Delete Password

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <PasswordContext.Provider
      value={{
        passwords: state.passwords,
      }}
    >
      {props.children}
    </PasswordContext.Provider>
  )
}

export default PasswordState;
