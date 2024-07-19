import React from 'react';
import '../assets/css/Header.css';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../assets/statics/WhiteEngrupir.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="app-header">
        <Container>
          <Row>
            <Col md={6} className='app-header-left'>
              <Link to='/'>
                <img src={Logo} className='app-header-logo'></img>
              </Link>
            </Col>
            <Col md={6} className='app-header-right'>
              <ul >
                <Link to="/nosotros">
                    <li className='app-header-item'>Nosotros</li>
                </Link>
                <Link to ="/secciones">
                    <li className='app-header-item'>Secciones</li>
                </Link>
                <Link to="/contacto">
                    <li className='app-header-item'>Contacto</li>
                </Link>
              </ul>  
            </Col>
          </Row>
        </Container>
      

      </header>
    </>
  )
}
