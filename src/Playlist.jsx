import React from 'react';
import { Card, Button, CardTitle, CardText,CardImg, Row, Col } from 'reactstrap';

function Playlist(props) {
  function handleDownloadClick(){
    //do something
  }
    return (
        <div className='playlist-container'>
            <Row className="justify-content-center">
        <Col sm="6">
          <Card>
            <CardImg 
            class="card-img-top" 
            src={props.img} 
            alt={props.text} />
            <Card body>
              <CardTitle>{props.title}</CardTitle>
              <CardText>{props.text}</CardText>
              <Button onClick={handleDownloadClick}>Download</Button>
            </Card>
          </Card>
        </Col>
        <Col sm="6">
          <CardImg 
          class="card-img-top" 
          src={props.img} 
          alt={props.text} />
          <Card body>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.text}</CardText>
            <Button onClick={handleDownloadClick}>Download</Button>
          </Card>
        </Col>
      </Row>


        </div>
    );
}
export default Playlist;