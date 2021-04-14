import React, { useReducer } from 'react';
import axios from 'axios';
import PasswordContext from './passwordContext';
import passwordReducer from './passwordReducer';
import {
  GET_PASSWORDS,
  ADD_PASSWORD,
  DELETE_PASSWORD,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PASSWORD,
  FILTER_PASSWORDS,
  CLEAR_PASSWORDS,
  CLEAR_FILTER,
  PASSWORD_ERROR
} from '../types';

const PasswordState = props => {
  const initialState = {
    passwords: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(passwordReducer, initialState);

  // Get Passwords
  const getPasswords = async () => {
    try {
      const res = await axios.get('/api/passwords');

      dispatch({
        type: GET_PASSWORDS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PASSWORD_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Password
  const addPassword = async password => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/passwords', password, config);

      dispatch({
        type: ADD_PASSWORD,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PASSWORD_ERROR,
        payload: err.response.msg
      });
    }
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

  // Update Password
  const updatePassword = async password => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/passwords/${password._id}`,
        password,
        config
      );

      dispatch({
        type: UPDATE_PASSWORD,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PASSWORD_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Passwords
  const clearPasswords = () => {
    dispatch({ type: CLEAR_PASSWORDS });
  };

  // Set Current Password
  const setCurrent = password => {
    dispatch({ type: SET_CURRENT, payload: password });
  };

  // Clear Current Password
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Passwords
  const filterPasswords = text => {
    dispatch({ type: FILTER_PASSWORDS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <PasswordContext.Provider
      value={{
        passwords: state.passwords,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addPassword,
        deletePassword,
        setCurrent,
        clearCurrent,
        updatePassword,
        filterPasswords,
        clearFilter,
        getPasswords,
        clearPasswords
      }}
    >
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordState;
