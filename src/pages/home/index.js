import React, { useState, useEffect } from 'react';

import api from '../../services/Api';

export default function Home() {
  const [home, setHome] = useState('');

  useEffect(() => {
    async function loadHome() { 
      const response = await api.get('/home');

      setHome(response.data);
    }

    loadHome();
  }, []);

  return(
    <>
      <h1>Home Page</h1>
      <span>Esta mensagem está vindo do backend: {home}</span>
    </>
  )
}