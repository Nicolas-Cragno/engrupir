import React from 'react';
import '../assets/css/Contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactItem from '../components/ContactItem';

export default function Contact() {
  return (
    <div className='page contact-page'>
      <Container>
        <Row>
          <Col md={12} className='medium-col-left'>
            <ContactItem></ContactItem>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
