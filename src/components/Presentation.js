import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Presentation() {
  return (
    <div className='presentation-element'>
      <Container>
        <Row>
          <Col md={6} className='medium-col-left'>
            <h1 className='presentation presentation-title'>ENGRUPIR</h1>
            <h5 className='presentation presentation-txt-words'>
              “A fines del sigo XIX y comienzos del siglo XX, el arte de vanguardia o 
              vanguardista era aquel con mayor potencia renovadora, revolucionaria o innovadora, 
              es decir, aquel que rompía de manera más clara con la tradición, ya no en términos 
              políticos sino estéticos."</h5>
            <h5 className='presentation presentation-txt-name'>
            Alejandro Guzmán en Reaxión, revista de divulgación científica (sept-dic 2015). 
            </h5>
          </Col>
          <Col md={6} className='medium-col-right description-txt'>
            <h3 className='page-txt presentation '>
            El arte vanguardista rompe con aquello que está instalado. Esto es exactamente lo que 
            buscamos en ENGRUPIR. <br/><br/>
            Te vamos a mostrar la otra cara de la moneda, dando a conocer artistas que merecen tener 
            más visibilidad a través de entrevistas y recomendaciones varias, como playlists, podcasts, 
            redes, libros y lugares para visitar, entre otras cosas.
            </h3>   
          </Col>
        </Row>
      </Container>
    </div>
  )
}
