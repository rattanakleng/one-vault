import React, { useState, useContext, useEffect } from 'react';
import PasswordContext from '../../context/password/passwordContext';
import { Link } from 'react-router-dom';

const PasswordForm = () => {
   const passwordContext = useContext(PasswordContext);

   const { addPassword, updatePassword, clearCurrent, current } =
      passwordContext;

   useEffect(() => {
      if (current !== null) {
         setPassword(current);
      } else {
         setPassword({
            name: '',
            userName: '',
            website: '',
            passwordValue: '',
            passwordHint: '',
            securityQuestion: '',
            securityAnswer: '',
            securityImage: '',
            other: '',
         });
      }
   }, [passwordContext, current]);

   const [password, setPassword] = useState({
      name: '',
      userName: '',
      website: '',
      passwordValue: '',
      passwordHint: '',
      securityQuestion: '',
      securityAnswer: '',
      securityImage: '',
      other: '',
   });

   const {
      name,
      userName,
      website,
      passwordValue,
      passwordHint,
      securityQuestion,
      securityAnswer,
      securityImage,
      other,
   } = password;

   const onChange = (e) =>
      setPassword({ ...password, [e.target.name]: e.target.value });

   const onSubmit = (e) => {
      e.preventDefault();
      if (current === null) {
         addPassword(password);
      } else {
         updatePassword(password);
      }
      clearAll();
   };

   const clearAll = () => {
      clearCurrent();
   };

   return (
      <form onSubmit={onSubmit} className='pb-5'>
         <h2 className='mb-5 text-center'>
            {current ? 'Edit Password' : 'Add Password'}
         </h2>

         <label htmlFor='name'>Name:</label>
         <input type='text' name='name' value={name} onChange={onChange} />

         <label htmlFor='userName'>User name:</label>
         <input
            type='text'
            name='userName'
            value={userName}
            onChange={onChange}
         />

         <label htmlFor='passwordValue'>Password:</label>
         <input
            type='text'
            name='passwordValue'
            value={passwordValue}
            onChange={onChange}
         />

         <label htmlFor='website'>Website:</label>
         <input
            type='text'
            name='website'
            value={website}
            onChange={onChange}
            placeholder=' https://www.example.com/'
         />

         <label htmlFor='passwordHint'>Password hint:</label>
         <input
            type='text'
            name='passwordHint'
            value={passwordHint}
            onChange={onChange}
         />

         <label htmlFor='securityQuestion'>Security question:</label>
         <input
            type='text'
            name='securityQuestion'
            value={securityQuestion}
            onChange={onChange}
         />

         <label htmlFor='securityAnswer'>Security answer:</label>
         <input
            type='text'
            name='securityAnswer'
            value={securityAnswer}
            onChange={onChange}
         />

         <label htmlFor='securityImage'>Security image:</label>
         <input
            type='text'
            name='securityImage'
            value={securityImage}
            onChange={onChange}
         />

         <label htmlFor='other'>Other:</label>
         <textarea type='text' name='other' value={other} onChange={onChange} />

         {current && (
            <>
               <Link to='/'>
                  <button
                     className='btn btn-secondary float-right mt-3 mr-3'
                     onClick={clearAll}
                  >
                     Cancel
                  </button>
               </Link>

               <button
                  type='submit'
                  className='btn btn-primary float-right mt-3 mb-5 mr-3'
               >
                  Update Password
               </button>
            </>
         )}

         {!current && (
            <>
               <button
                  className='btn btn-secondary float-right mt-3 mr-3'
                  onClick={clearAll}
               >
                  Clear Form
               </button>

               <button
                  type='submit'
                  className='btn btn-primary float-right mt-3 mr-3'
               >
                  Add Password
               </button>
            </>
         )}
      </form>
   );
};

export default PasswordForm;
