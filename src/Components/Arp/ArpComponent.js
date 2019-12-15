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
        this.state = {
            arp_length: 0,
            arp_order: '',
            inputPlaceholder: ''
        }
        this.lengthChange = this.lengthChange.bind(this);
        this.orderChange = this.orderChange.bind(this);
        this.textInput = React.createRef();
    }

    lengthChange(val) {
        this.setState({
            arp_length: val
        })

        if (val === 2) {
            this.setState({
                inputPlaceholder: 'Max 4 digits, 0 and 1 only (i.e. 01, 0110)'
            });
        }
        else if (val === 4) {
            this.setState ({
                inputPlaceholder: 'Max 9 digits, 0 through 3 only (i.e. 0123, 1021)'
            });
        }
        else if (val === 8) {
            this.setState({
                inputPlaceholder: 'Max 21 digits, 0 through 8 only (i.e. 01234567)'
            });
        }
    }

    orderChange() {
        this.setState({
            arp_order: this.textInput.current.value
        });
    }

    render () {
        return (
            <>
            <Container>
                <div className="title">Arp Length: </div>
                <ToggleButtonGroup type="radio" name="bar-length" onChange={this.lengthChange}>
                    <ToggleButton variant="outline-light" value={2}>2 bars</ToggleButton>
                    <ToggleButton variant="outline-light" value={4}>4 bars</ToggleButton>
                    <ToggleButton variant="outline-light" value={8}>8 bars</ToggleButton>
                </ToggleButtonGroup>
                <br></br>
                <br></br>
                
                <div className="title">Arp Order:</div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <Button variant="outline-light" type="submit" onClick={this.orderChange}>Set</Button>
                    </InputGroup.Prepend>
                    <FormControl aria-describedby="basic-addon1" placeholder={this.state.inputPlaceholder} ref={this.textInput} type="text"/>
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