import React from 'react';
import './keyscale.css';
import Container from 'react-bootstrap/Container';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton';
class KeyAndScaleComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {}
    }

    render () {
        return (
            <div className="keyAndScale">
                <Container>
                    <div className="title">Key: </div>
                    <ToggleButtonGroup type="radio" name="key" onChange={this.props.keyChange}>
                        <ToggleButton variant="outline-light" value={'C4'}>C</ToggleButton>
                        <ToggleButton variant="outline-light" value={'F4'}>F</ToggleButton>
                        <ToggleButton variant="outline-light" value={'Bb4'}>Bb</ToggleButton>
                        <ToggleButton variant="outline-light" value={'Eb4'}>Eb</ToggleButton>
                        <ToggleButton variant="outline-light" value={'Ab4'}>Ab</ToggleButton>
                        <ToggleButton variant="outline-light" value={'Db4'}>Db</ToggleButton>
                        <ToggleButton variant="outline-light" value={'Gb4'}>Gb</ToggleButton>
                        <ToggleButton variant="outline-light" value={'B4'}>B</ToggleButton>
                        <ToggleButton variant="outline-light" value={'E4'}>E</ToggleButton>
                        <ToggleButton variant="outline-light" value={'A4'}>A</ToggleButton>
                        <ToggleButton variant="outline-light" value={'D4'}>D</ToggleButton>
                        <ToggleButton variant="outline-light" value={'G4'}>G</ToggleButton>
                    </ToggleButtonGroup>
                </Container>
                <br></br>
                <Container>
                    <div className="title">Scale: </div>
                    <div className="buttonGrid">
                            <ToggleButtonGroup type="radio" name="scale" onChange={this.props.scaleChange}>
                                <ToggleButton variant="outline-light" value={"major"}>Major</ToggleButton>
                                <ToggleButton variant="outline-light" value={"minor"}>Minor</ToggleButton>
                                <ToggleButton variant="outline-light" value={"dorian"}>Dorian</ToggleButton>
                                <ToggleButton variant="outline-light" value={"melodic"}>Melodic Minor</ToggleButton>
                                <ToggleButton variant="outline-light" value={"harmonic"}>Harmonic Minor</ToggleButton>
                            </ToggleButtonGroup>
                    </div>
                </Container>
                <br></br>
                <Container>
                    <div className="help-info">
                        This is what will determine the "feel" of your arp!
                    </div>
                </Container>
                <br></br>
                <hr></hr>
            </div>
        );
    }
}

export default KeyAndScaleComponent;