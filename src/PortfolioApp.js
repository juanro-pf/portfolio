import React, { useState } from 'react';
import { Context } from './Context';
import { AppRouter } from './router/AppRouter';

export const PortfolioApp = () => {

  const [show, setShow] = useState('none');

  return (
    <Context.Provider value={{
      show,
      setShow
    }}>
      <AppRouter />
    </Context.Provider>
  );
};
