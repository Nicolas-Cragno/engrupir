import React from 'react';
import LogoInstagram from '../assets/statics/LogoInstagram.png';
import LogoSoundCloud from '../assets/statics/LogoSoundCloud.png';
import Logo from '../assets/statics/OrangeEngrupir.png';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ContactItem() {
  return (
    <div className='contactitem'>
    <Container>
      <Row>
        <Col md={12} className='contactitem-logo'>
        <img src={Logo} className='contact-page-logo' alt=''></img>
        </Col>
        <Col md={12} className='contactitem-links'>
          <Link to='https://www.instagram.com/_engrupir/' target='_blank' className='contactitem-links-box'>
            <h3 className='contactitem-links-txt'>
            <img src={LogoInstagram} alt='' className='contactitem-img'></img>
              /_engrupir
            </h3>
          </Link>
          <Link to='https://soundcloud.com/brii-martinez' target='_blank' className='contactitem-links-box'>
            <h3 className='contactitem-links-txt'>
              <img src={LogoSoundCloud} alt='' className='contactitem-img'></img>
              /brii-martinez.
            </h3>
          </Link>        
        </Col>
      </Row>
    </Container>






    {/* 
      <div className='contactitem-txt'>
      </div>
      <div className='contactitem-links'>
      </div>
    */}
    </div>
  )
}
