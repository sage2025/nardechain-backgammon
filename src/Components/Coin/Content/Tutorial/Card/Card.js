import React from 'react';
import { Button, MDBCard, MDBCardBody, MDBCardText, MDBCol } from 'mdbreact';
import './Card.css';

const Card = ({title, label}) => {
  return (
    <MDBCol style={{ maxWidth: "32rem" }}>
      <MDBCard style={{backgroundColor:"rgb(242, 250, 255)", border:"0"}}>
        <div className="card-image">
          <h1 className="title_card">{title}</h1>
        </div>
        <MDBCardBody>
          <MDBCardText className="text_card">{label}</MDBCardText>
          <Button className="btn_card mb-5">choose</Button>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Card;