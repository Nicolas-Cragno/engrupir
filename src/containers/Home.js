import React from 'react';
import '../assets/css/Home.css';
import Logo from '../assets/statics/OrangeEngrupir.png';

export default function Home() {
  return (
    <div className='page home-page'>
      <img src={Logo} className='home-page-logo'></img>
    </div>
  )
}
