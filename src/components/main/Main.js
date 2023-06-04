// https://dribbble.com/shots/19801976-NFT-Dashboard-Manage-your-NFT-Collection
// https://dribbble.com/shots/19272172-Nft-mobile-app

// https://codepen.io/ahmadnasr/pen/KKpvNGY

import React, { useState, useCallback } from 'react';
import Menu from './Menu';
import Settings from './Settings';
import Dashboard from './Dashboard';
import User from './User';
import Rankings from './Rankings';
import Navigation from '../extra/Navigation'


import '../../styles/main.scss';

function Main() {

  

  return (
    <>
      <div class='container'>
        <Menu/>
        <Settings/>
        <Dashboard/>
        <Navigation/>
        <User/>
        <Rankings/>
      </div>
    </>
    
  );
}

export default Main;
