import React from 'react'
import { Container, Row , Col } from 'react-bootstrap';

function Layout1() {
  return (
    <div>
      <Container className='my-4 py-4 bg-light  '>
      <Col className='my-2 border border-4 border-danger rounded-5 bg-black text-light text-center'md={{ span: 6, offset: 3 }}>SPAN OFFSET with Col</Col> 
            <Row>
                    <Col className='my-2 border border-light rounded bg-primary' md={4}>md=4</Col>
                    <Col className='my-2 border border-light rounded bg-primary' md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
           </Row>
            <Row>
                    <Col className='border border-light rounded bg-primary' md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                    <Col className='my-2 border border-light rounded bg-primary' md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
            </Row>
            <Row>
                    <Col className='my-2 border border-light rounded bg-primary' md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
            </Row>
            <Row className='bg-white my-4'></Row>
          
            <Row  className='mx-auto'>
                <Col md={4}  className='my-4 text-white bg-dark'>
                        <div>dghbbh</div>
                </Col>
                <Col md={5}  className='my-4 bg-danger'>
                        <div>dghbbh</div>
                </Col>
                <Col md={3}  className='my-4 bg-warning'>
                        <div>dghbbh</div>
                </Col>
            </Row>
            <Row className='bg-white my-4'></Row>
          
            <Row >
                <Col className='bg-primary' sm={8}>sm=8</Col>
                <Col sm={4}>sm=4</Col>
            </Row>
            
            <Row>
                <Col className='bg-primary' sm>sm=true</Col>
                <Col sm>sm=true</Col>
                <Col  className='bg-primary'    sm>sm=true</Col>
            </Row>
            
            <Row>
                <Col className='bg-primary' xs={12} md={8}>
                xs=12 md=8
                </Col>
                <Col xs={6} md={4}>
                xs=6 md=4
                </Col>
            </Row>
            <Row className='bg-white my-4'></Row>
          
            <Col md={{ span: 6, offset: 3 }} className='bg-dark text-white rounded border border-4 border-danger  text-center my-4 '>ORDER</Col>
            
            <Row>
                <Col xs>First, but unordered</Col>
                <Col className='bg-danger' xs={{ order: 12 }}>Second, but last</Col>
                <Col xs={{ order: 1 }}>Third, but second</Col>
            </Row>
            <Row>
                <Col xs={{ order: 'last' }}>First, but last</Col>
                <Col className='bg-warning' xs>Second, but unordered</Col>
                <Col xs={{ order: 'first' }}>Third, but first</Col>
            </Row>
           
          

        </Container>
    </div>
  )
}

export default Layout1;
