import {
  ADD_PASSWORD,
  DELETE_PASSWORD,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PASSWORD,
  FILTER_PASSWORDS,
  CLEAR_FILTER,
} from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case ADD_PASSWORD:
      return {
        ...state,
        passwords: [...state.passwords, action.payload],
      }
    
      case DELETE_PASSWORD:
        return {
          ...state,
          contacts: state.contacts.filter(
            contact => contact._id !== action.payload
          ),
          loading: false
        };

    default:
      return state;
  }
}
