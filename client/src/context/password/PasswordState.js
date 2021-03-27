import React, { useReducer } from 'react';
import uuid from 'react-uuid';
import PasswordContext from './passwordContex';
import passwordReducer from './passwordReducer';
import axios from 'axios';
import {
  ADD_PASSWORD,
  DELETE_PASSWORD,
  PASSWORD_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PASSWORD,
  FILTER_PASSWORDS,
  CLEAR_FILTER,
} from '../types'

const PasswordState = (props) => {
  const initialState = {
    passwords: [
      {
        id: 1,
        name: 'home depot',
        userName: 'HomeDepotUserName',
        website: '',
        passwordValue: 'homedepot123',
        passwordHint: 'general pattern',
        securityQuestion: 'What stree were you born',
        securityAnswer: '180',
        securityImage: 'chicken',
      },
      {
        id: 2,
        name: 'lowes',
        userName: 'LowesUserName',
        website: 'https://www.lowes.com',
        passwordValue: 'lowes123',
        passwordHint: 'general pattern',
        securityQuestion: 'What stree were you born',
        securityAnswer: '280',
        securityImage: 'spacNeedle',
      },
      {
        id: 3,
        name: 'wayfair',
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
  const addPassword = password => {
    password.id = uuid();
    dispatch({ type: ADD_PASSWORD, payload: password });
  };

  // Delete Password
  const deletePassword = async id => {
    try {
      await axios.delete(`/api/passwords/${id}`);

      dispatch({
        type: DELETE_PASSWORD,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: PASSWORD_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Set Current Contact

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <PasswordContext.Provider
      value={{
        passwords: state.passwords,
        addPassword,
        deletePassword,
        clearCurrent
      }}
    >
      {props.children}
    </PasswordContext.Provider>
  )
}

export default PasswordState
