import React from 'react'
import { Container, Row , Col } from 'react-bootstrap';

function Layout3() {
  return (
    <div>
        <Container>
          <Row  className=" bg-dark">
                <div className="w-25 p-3" style={{backgroundColor: "#eee"}}>Width 25%</div>
          </Row>  
       <Row className="my-3"> </Row>
           <Row className=" bg-dark"> 
                <div className="w-50 p-3" style={{backgroundColor: "#eee"}}>Width 50%</div>
        </Row>
       <Row className="my-3"> </Row>
           <Row className=" bg-dark"> 
                <div className="w-75 p-3" style={{backgroundColor: "#eee"}}>Width 75%</div>
                </Row>
       <Row className="my-3"> </Row>
           <Row className=" bg-dark"> 
                <div className="w-100 p-3" style={{backgroundColor: "#eee"}}>Width 100%</div>
                </Row>
       <Row className="my-3"> </Row>
           <Row className=" bg-dark"> 
                <div className="w-auto p-3" style={{backgroundColor: "#eee"}}>Width auto from Parent</div>
          </Row>  
        </Container>
        <Container className='my-5'>

            <Row style={{height: "500px"}}>
<Col className='d-flex justify-content-center border border-danger border-4'> 
        <div className="h-25 d-inline-block" style={{width: "120px", backgroundColor: "rgba(0,0,255,.1)"}}>Height 25%</div>
    </Col>
    <div className="vr " />
    <Col className='d-flex justify-content-center border border-danger border-4'>
  <div className="h-50 d-inline-block" style={{width: "120px", backgroundColor: "rgba(0,0,255,.1)"}}>Height 50%</div>
  </Col>
  <div className="vr " />
    <Col className='d-flex justify-content-center border border-danger border-4'>
  <div className="h-75 d-inline-block" style={{width: "120px", backgroundColor: "rgba(0,0,255,.1)"}}>Height 75%</div>
  </Col>
  <div className="vr " />
    <Col className='d-flex justify-content-center border border-danger border-4'>
  <div className="h-100 d-inline-block" style={{width: "120px", backgroundColor: "rgba(0,0,255,.1)"}}>Height 100%</div>
  </Col>
  <div className="vr " />
    <Col className='d-flex justify-content-center border border-danger border-4'>
  <div className="h-auto d-inline-block" style={{width: "120px", backgroundColor: "rgba(0,0,255,.1)"}}>Height auto</div>
</Col>
            </Row>
        </Container>
    </div>
  )
}

export default Layout3;
