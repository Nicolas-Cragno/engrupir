import React from 'react';
import '../assets/css/Ofert.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ImgOfert from '../assets/statics/ImgKolter.png';

export default function Ofert() {
  return (
    <div className='page ofert-page'>
        <Container>
            <Row>
                <Col md={6} className='medium-col-left ofert-logo'>
                    <Link to={'https://soundcloud.com/brii-martinez/sets/hoove-volume-4-8?ref=clipboard&p=a&c=1&si=2149608c4e8c43338d435d879f181017&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'} target='_blank'>
                        <img src={ImgOfert} alt='' className='ofert-img'></img>
                    </Link>
                </Col>
                <Col md={6} className='medium-col-right ofert-txt'>
                    <h3 className='page-txt presentation '>
                    Kolter es un dj alemán de musica house, acid house y minimal 
                    deep tech que nos sorprende cada vez mas con sus lanzamientos. 
                    “HOOVE VOLUME 4.8%” se lanzó el 9 de junio de 2022 en el sello 
                    REINE OBERGÄRUNG.
                    <br/><br/>
                    Este E.P de cinco canciones muy grooveras cuenta con variaciones 
                    del género house, el beat marcado de a momentos y bajadas notorias 
                    que son una de las marcas registradas a nivel producción que tiene 
                    este artista, para luego poder recibir el drop.
                    <br/><br/>
                    House para disfrutar y bailar, así definimos a el sonido general de 
                    este E.P.
                    </h3>                 
                </Col>
            </Row>
        </Container>
    </div>
  )
}
