import React from 'react';
import keyComponent from './keyComponent';
import scaleComponent from './scaleComponent';
import arpLengthComponent from './arpLengthComponent';
import arpOrderComponent from './arpOrderComponent';
import noteLengthComponent from './noteLengthComponent';
import chordSequenceComponent from './chordSequenceComponent';
import patternstepSequencerComponent from './patternstepSequencerComponent';
import BPMComponent from './BPMComponent';
import './homepage.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function keyAndScaleComponent(){
    return(
      // <div className ="buttons">
      //   <keyComponent/>
      //   <scaleComponent/>
      //   <arpLengthComponent/>
      //   <arpOrderComponent/>
      //   <noteLengthComponent/>
      //   <chordSequenceComponent/>
      //   <patternstepSequencerComponent/>
      //   <BPMComponent/>
      // </div>
      <div className="homepage">
          <br></br>
          <Container>
              <div class="welcome">
                  Welcome to Arpy JS!
              </div>
              <br></br>
              <div class="basic-info">
                  Here are the basic steps you need to know!
              </div>
              <br></br>
              <Container>
                  <div class="list">
                  <ListGroup >
                      <ListGroup.Item >Select a Key and Scale type</ListGroup.Item>
                      <ListGroup.Item >Choose the Arp length (2, 4 or 8 bars)</ListGroup.Item>
                      <ListGroup.Item >Choose the Arp order</ListGroup.Item>
                      <ListGroup.Item >Select the note length</ListGroup.Item>
                      <ListGroup.Item >Select the chord sequence!</ListGroup.Item>
                      <ListGroup.Item >Choose the Pattern/Step Sequence!</ListGroup.Item>
                  </ListGroup>
                  </div>
              </Container>
          </Container>
      </div>
    )
}

export default keyAndScaleComponent;
