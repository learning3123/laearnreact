import React from 'react'
import { Container, Row , Col } from 'react-bootstrap';

function Layout2() {
  return (
    <div>
        <Container>
          <Row>
          <Col  className="bg-dark text-light d-flex justify-content-center">
            <div className="vr " />
        gfvdfnxj
            </Col> 
              </Row> 
            <Row>
            <Col md={{ span: 6, offset: 3 }} className='bg-dark text-white rounded border border-4 border-danger  text-center my-4 '>
                d-flex justify-content-center:JC horizontal
                <pre className='my-2 h1'>d-flex JCH</pre>
          
    <hr/>
     d-flex align-item-center:AI Vertical
                <pre className='my-2 h1'>d-flex AIV</pre>
            
            </Col>
          </Row>  
        </Container>
    </div>
  )
}

export default Layout2;
