import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button';

class KeyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            key: '',
            scale: '',
            arpLength: 0,
            arpOrder: '',
            noteLength: '',
            chordSequence: '',
            stepSequence: '',
            bpm: '',
            fileName: ''
        };
    }

    render () {
        return (
            <div class="setup">
                <div className="key-and-scale">
                    Key and Scale!
                </div>
                <Container>
                     <Row>
                         <Col>Key:
                            <ButtonGroup toggle>
                                <Button variant="outline-light">C</Button>
                                <Button variant="outline-light">F</Button>
                                <Button variant="outline-light">Bb</Button>
                                <Button variant="outline-light">Eb</Button>
                                <Button variant="outline-light">Ab</Button>
                                <Button variant="outline-light">Db</Button>
                                <Button variant="outline-light">Gb</Button>
                                <Button variant="outline-light">B</Button>
                                <Button variant="outline-light">E</Button>
                                <Button variant="outline-light">A</Button>
                                <Button variant="outline-light">D</Button>
                                <Button variant="outline-light">G</Button>
                            </ButtonGroup>
                         </Col>
                         <Col>Scale:
                         </Col>
                     </Row>
                </Container>
            </div>
        )
    }



}

export default KeyComponent;