import React from 'react';
import '../assets/css/Sections.css';
import SectionItem from '../components/SectionItem';
import ImgAcidGroove from '../assets/statics/AcidGroove.png';
import ImgOnMyFeet from '../assets/statics/OnMyFeet.png';
import ImgOfert from '../assets/statics/PerlitaOferta.png';
import ImgVanguArt from '../assets/statics/VanguArt.png';

export default function Sections() {
  return (
    <div className='page sections-page'>
      <SectionItem 
        img={ImgAcidGroove}
        title={'ACID GROOVE'}
        subtitle1={'¿Te suena?'}
        txt1={'Repasamos la carrera de Carajo desde sus inicios hasta su disolución.'}
        subtitle2={'Hace un par de años...'}
        txt2={'En su treinta aniversario, recorremos el nacimiento de un movimiento under de los 80s, el Acid House.'}
      ></SectionItem>
      <SectionItem
        img={ImgOnMyFeet}
        title={'ON MY FEET'}
        subtitle1={'Entrevista | Iván Lugano (Vértigo)'}
        txt1={'Ya podés escuchar nuestra charla con el dueño de Vértigo, disfruten conociendolo un poco y escuchando lo que tiene para decirnos.'}
        /*subtitle2={}
        txt2={}*/
      ></SectionItem>
      <SectionItem
        img={ImgOfert}
        title={'PERLITA EN OFERTA'}
        subtitle1={'Kolter | Hoove Volume 4.8%'}
        txt1={'Te invitamos a escuchar el nuevo E.P. de este DJ Alemán que nos sorprende cada vez mas con sus lanzamientos. '}
      ></SectionItem>
      <SectionItem
        img={ImgVanguArt}
        title={'VANGUART'}  
        subtitle1={'Ophelia Liu Mua'}
        txt1={'Conoce la obra de esta artista oriunda de Hong Kong.'}
        subtitle2={'Toto Tatuer'}
        txt2={'De tatuar pieles a tallar vidrios. Te mostramos la obra de este gran artista oriundo de Ramos Mejía.'}
      ></SectionItem>
    </div>
  )
}
