import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

class ArpComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.textInput = React.createRef();
    }

    render () {
        return (
            <>
            <Container>
                <div className="title">Arp Length: </div>
                <ToggleButtonGroup type="radio" name="bar-length" onChange={this.props.lengthChange}>
                    <ToggleButton variant="outline-light" value={2}>2 bars</ToggleButton>
                    <ToggleButton variant="outline-light" value={4}>4 bars</ToggleButton>
                    <ToggleButton variant="outline-light" value={8}>8 bars</ToggleButton>
                </ToggleButtonGroup>
                <br></br>
                <br></br>
                
                <div className="title">Arp Order:</div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <Button variant="outline-light" type="submit" onClick={this.props.orderChange}>Set</Button>
                    </InputGroup.Prepend>
                    <FormControl aria-describedby="basic-addon1" placeholder={this.props.inputPlaceholder} ref={this.textInput} type="text"/>
                </InputGroup>
                <div className="help-info">
                This is what determines the length and note order !
            </div>
            </Container>
            <br></br>
            <hr></hr>
            </>
        )
    }

}

export default ArpComponent;