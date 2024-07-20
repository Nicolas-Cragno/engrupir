import React from 'react';
import Page1 from '../assets/statics/NotaToto1.png';
import Page2 from '../assets/statics/NotaToto2.png';
import News from '../components/News';

export default function VanguartTwo() {
  return (
    <div>
        <News
            title='TOTO TATUER'
            page1={Page1}
            page2={Page2}
      ></News>
    </div>
  )
}
