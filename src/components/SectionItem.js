import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SectionItem(props) {
    const { img, title, subtitle1, link1, target1, subtitle2, link2, target2 } = props;
    /* const {txt1, txt2} = props; */
  return (
    <div className='section-item-element'>
      <Container>
        <Row>
            <Col md={3} className='section-item-img'>
                <img src={img} className='item-img' alt=''></img>
            </Col>
            <Col md={9} className='section-item-txt'>
                <h1 className='item-title'>{title}</h1>
                <hr/>
                <Container className='item-elements'>
                    <Row>
                        <Col md={12} className='item-element'>
                            <Link to={link1} className='item-link' target={target1}>
                                <h5 className='item-subtitle'>{subtitle1}</h5>
                            </Link>
                            {/* 
                            <p className='item-txt'>{txt1}</p>
                            */}
                        </Col>

                        <Col md={12} className='item-element'>
                            <Link to={link2} className='item-link' target={target2}>
                                <h5 className='item-subtitle'>{subtitle2}</h5>
                            </Link> 
                            {/* 
                            <p className='item-txt'>{txt2}</p>
                            */}   
                        </Col>

                    </Row>
                </Container>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
