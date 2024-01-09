import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import syle from './style.module.css'

const TogglePasswordVisibility = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const toggleVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const inputType = passwordVisible ? 'text' : 'password';

  return (
    <>
     
      
    </>
  );
};

export default TogglePasswordVisibility;
