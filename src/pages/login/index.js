import React, { useState, useEffect } from 'react';

import api from '../../services/Api';

export default function Login() {
  const [login, setLogin] = useState('');

  useEffect(() => {
    async function loadLogin() { 
      const response = await api.get('/login');

      setLogin(response.data);
    }

    loadLogin();
  }, []);

  return(
    <>
      <h1>Login Page</h1>
      <span>This message is comming from Express Server: {login}</span>
    </>
  )
}