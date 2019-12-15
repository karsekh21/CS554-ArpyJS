import React from 'react';
import './keyscale.css';
import Container from 'react-bootstrap/Container';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton';
class KeyAndScaleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            scale: ''
        }
        this.keyChange = this.keyChange.bind(this);
        this.scaleChange = this.scaleChange.bind(this);
    }

    keyChange(val) {
        this.setState({
            key: val
        });
    }

    scaleChange(val) {
        this.setState({
            scale: val
        })
    }

    render () {
        return (
            <div className="keyAndScale">
                <Container>
                    <div className="title">Key: </div>
                    <ToggleButtonGroup type="radio" name="key" onChange={this.keyChange}>
                        <ToggleButton variant="outline-light" value={'C'}>C</ToggleButton>
                        <ToggleButton variant="outline-light" value={'F'}>F</ToggleButton>
                        <ToggleButton variant="outline-light" value={'Bb'}>Bb</ToggleButton>
                        <ToggleButton variant="outline-light" value={'Eb'}>Eb</ToggleButton>
                        <ToggleButton variant="outline-light" value={'Ab'}>Ab</ToggleButton>
                        <ToggleButton variant="outline-light" value={'Db'}>Db</ToggleButton>
                        <ToggleButton variant="outline-light" value={'Gb'}>Gb</ToggleButton>
                        <ToggleButton variant="outline-light" value={'B'}>B</ToggleButton>
                        <ToggleButton variant="outline-light" value={'E'}>E</ToggleButton>
                        <ToggleButton variant="outline-light" value={'A'}>A</ToggleButton>
                        <ToggleButton variant="outline-light" value={'D'}>D</ToggleButton>
                        <ToggleButton variant="outline-light" value={'G'}>G</ToggleButton>
                    </ToggleButtonGroup>
                </Container>
                <br></br>
                <Container>
                    <div className="title">Scale: </div>
                    <div className="buttonGrid">
                            <ToggleButtonGroup type="radio" name="scale" onChange={this.scaleChange}>
                                <ToggleButton variant="outline-light" value={"Major"}>Major</ToggleButton>
                                <ToggleButton variant="outline-light" value={"Minor"}>Minor</ToggleButton>
                                <ToggleButton variant="outline-light" value={"Dorian"}>Dorian</ToggleButton>
                                <ToggleButton variant="outline-light" value={"Melodic"}>Melodic Minor</ToggleButton>
                                <ToggleButton variant="outline-light" value={"Harmonic"}>Harmonic Minor</ToggleButton>
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