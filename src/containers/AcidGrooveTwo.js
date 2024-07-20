import React from 'react';
import Page1 from '../assets/statics/NotaAcidHouse1.png';
import Page2 from '../assets/statics/NotaAcidHouse2.png'
import News from '../components/News';

export default function AcidGrooveOne() {
  return (
    <div>
      <News
        title='30 AÑOS DEL ACID HOUSE'
        page1={Page1}
        page2={Page2}
      ></News>
    </div>
  )
}
