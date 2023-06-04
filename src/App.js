// https://dribbble.com/shots/19801976-NFT-Dashboard-Manage-your-NFT-Collection
// https://dribbble.com/shots/19272172-Nft-mobile-app

// https://codepen.io/ahmadnasr/pen/KKpvNGY

import React, { useState, useCallback } from 'react';
import Main from './components/main/Main'
import Login from './components/login/Login'


import { useSelector } from 'react-redux';      // Subscribes to state changes in Reducers.

function App() {

  
  return (
    <>
      {useSelector((state) => state.store.isLoginState)
        ? <Login/>
        : <Main/>
      }
    </>
    
  );
}

export default App;
