import React, { useContext, useRef, useEffect } from 'react';
import PasswordContext from '../../context/password/passwordContext';

const PasswordFilter = () => {
  const passwordContext = useContext(PasswordContext);
  const text = useRef('');

  const { filterPasswords, clearFilter, filtered } = passwordContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterPasswords(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Search password by name'
        onChange={onChange}
      />
    </form>
  );
};

export default PasswordFilter;
