import React from 'react'
import { Card, Container, Button, Row , Col } from 'react-bootstrap';
import img1 from '../img/logo512.png'
function CardLayout() {
  return (
    <div className="bg-danger ">
      
        <Container className="xs">
        <Row>
            <Col className='my-5 d-flex justify-content-center'>

             <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
    </Col>
    </Row>
        </Container>
    </div>
  )
}

export default CardLayout;
