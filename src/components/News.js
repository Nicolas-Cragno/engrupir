import React from 'react';
import '../assets/css/News.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function News(props) {
    const {title, page1, page2, page3 } = props;
  return (
    <div className='page news-page'>
      <Container>
        <Row>
            <Col md={12} className='news-page-col'>
                <h1 className='news-page-title'>{title}</h1>
                <img src={page1} alt='' className='news-page-img'></img>
            </Col>
            <Col md={12} className='news-page-col'>
                <img src={page2} alt='' className='news-page-img'></img>
            </Col>
            <Col md={12} className='news-page-col'>
                <img src={page3} alt='' className='news-page-img'></img>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
