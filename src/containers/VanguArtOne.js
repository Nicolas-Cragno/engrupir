import React from 'react';
import Page1 from '../assets/statics/NotaOphelia1.png';
import Page2 from '../assets/statics/NotaOphelia2.png';
import Page3 from '../assets/statics/NotaOphelia3.png';
import News from '../components/News';

export default function VanguArtOne() {
  return (
    <div>
        <News
        title='OPHELIA LIU MUA'
        page1={Page1}
        page2={Page2}
        page3={Page3}
      ></News>
    </div>
  )
}
