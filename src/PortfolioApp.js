import React, { useState } from 'react';
import { Context } from './Context';
import { AppRouter } from './router/AppRouter';

export const PortfolioApp = () => {

  const [show, setShow] = useState('none');
  const [out, setOut] = useState('sidebar animate__animated animate__fadeInLeft animate__faster');

  return (
    <Context.Provider value={{
      show,
      setShow,
      out,
      setOut
    }}>
      <AppRouter />
    </Context.Provider>
  );
};
