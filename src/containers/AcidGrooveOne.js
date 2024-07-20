import React from 'react';
import Page1 from '../assets/statics/NotaCarajo1.png';
import Page2 from '../assets/statics/NotaCarajo2.png';
import News from '../components/News';

export default function AcidGrooveOne() {
  return (
    <div>
      <News
        title='PUNK ROCK Y NÜ METAL COMBINADOS EN 8 DISCOS'
        page1={Page1}
        page2={Page2}
      ></News>
    </div>
  )
}
