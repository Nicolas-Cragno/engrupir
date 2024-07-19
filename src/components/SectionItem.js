import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SectionItem(props) {
    const { img, title, subtitle1, txt1, link1, subtitle2, txt2, link2 } = props;
  return (
    <div className='section-item-element'>
      <Container>
        <Row>
            <Col md={2} className='section-item-img'>
                <img src={img} className='item-img'></img>
            </Col>
            <Col md={10} className='section-item-txt'>
                <h1 className='item-title'>{title}</h1>
                <hr/>
                <Container className='item-elements'>
                    <Row>
                        <Col md={8} className='item-element'>
                            <Link to='/secciones' className='item-link'>
                                <h5 className='item-subtitle'>{subtitle1}</h5>
                            </Link>
                            <p className='item-txt'>{txt1}</p>
                        </Col>

                        <Col md={8} className='item-element'>
                            <Link to='/secciones' className='item-link'>
                                <h5 className='item-subtitle'>{subtitle2}</h5>
                            </Link>    
                            <p className='item-txt'>{txt2}</p>
                        </Col>

                    </Row>
                </Container>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
