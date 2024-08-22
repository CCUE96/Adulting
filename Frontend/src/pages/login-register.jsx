import React, { useState } from 'react';
import Login from '../components/login&register/login';
import Register from '../components/login&register/signup';

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);

  const toggleView = () => {
    setIsRegister(!isRegister);
  };

  return (
    <>
      {isRegister ? (
        <Register onToggle={toggleView} />
      ) : (
        <Login onToggle={toggleView} />
      )}
    </>
  );
}