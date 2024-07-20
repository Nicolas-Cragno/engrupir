import React from 'react';
import '../assets/css/Sections.css';
import { Container, Row, Col } from 'react-bootstrap';
import SectionItem from '../components/SectionItem';
import ImgAcidGroove from '../assets/statics/AcidGroove.png';
import ImgOnMyFeet from '../assets/statics/OnMyFeet.png';
import ImgOfert from '../assets/statics/PerlitaOferta.png';
import ImgVanguArt from '../assets/statics/VanguArt.png';

export default function Sections() {
  return (
    <div className='page sections-page'>
      <Container>
        <Row>
          <Col md={12}>
            <SectionItem 
              img={ImgAcidGroove}
              title={'ACID GROOVE'}
              subtitle1={'¿Te suena? | Repasamos la carrera de Carajo desde sus inicios hasta su disolución.'}
              link1={'/acidgroove-carajo'}
              subtitle2={'Hace un par de años... | Recorremos el nacimiento de un movimiento under de los 80s, el Acid House.'}
              link2={'/acidgroove-acidhouse'}
            ></SectionItem>
          </Col>
          <Col md={12}>
            <SectionItem
              img={ImgOnMyFeet}
              title={'ON MY FEET'}
              subtitle1={'Entrevista | Iván Lugano (Vértigo)'}
              link1={'https://soundcloud.com/brii-martinez/vertigo-entrevista?ref=clipboard&p=a&c=1&si=c6878d736a664abda1119002e352f8e1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'}
              target1={'_blank'}
              /*subtitle2={}
              txt2={}*/
            ></SectionItem>
          </Col>
          <Col md={12}>
            <SectionItem
              img={ImgOfert}
              title={'PERLITA EN OFERTA'}
              subtitle1={'Kolter | Hoove Volume 4.8% (E.P.)'}
              link1={'/oferta'}
            ></SectionItem>
          </Col>
          <Col md={12}>
            <SectionItem
              img={ImgVanguArt}
              title={'VANGUART'}  
              subtitle1={'Ophelia Liu Mua | Conoce la obra de esta artista oriunda de Hong Kong.'}
              link1={'/vanguart-ophelia'}
              subtitle2={'Toto Tatuer | De tatuar pieles a tallar vidrios. Te mostramos la obra de este gran artista oriundo de Ramos Mejía.'}
              link2={'/vanguart-toto'}
            ></SectionItem>
          </Col>
        </Row>
      </Container>


    </div>
  )
}
