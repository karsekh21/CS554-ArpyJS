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
            placeholder: ''
        }
        this.textInput = React.createRef();
        this.arpOrderCreate = this.arpOrderCreate.bind(this);
        this.showOrder = this.showOrder.bind(this);
    }

    arpOrderCreate() {
        let val = this.textInput.current.value;
        this.props.orderChange(val);

        if (this.props.arp_length === 2) {
            if (this.props.arp_order.length > 4 || this.props.arp_order.length === 0) {
                this.setState({
                    placeholder: 'Arp is improper length'
                })
            }
            else {
                this.setState ({
                    placeholder: 'Arp is Set!'
                })
            }
        }
        else if (this.props.arp_length === 4) {
            if (this.props.arp_order.length > 9 || this.props.arp_order.length === 0) {
                this.setState({
                    placeholder: 'Arp is improper length'
                })
            }
            else {
                this.setState ({
                    placeholder: 'Arp is Set!'
                })
            }
        }  
        else if (this.props.arp_length === 8) {
            if (this.props.arp_order.length > 21 || this.props.arp_order.length === 0) {
                this.setState({
                    placeholder: 'Arp is improper length'
                })
            }
            else {
                this.setState ({
                    placeholder: 'Arp is Set!'
                })
            }
        }       
    }

    showOrder() {
        
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
                    <Button variant="outline-light" type="submit" onClick={this.arpOrderCreate}>Set</Button>
                    </InputGroup.Prepend>
                    <FormControl aria-describedby="basic-addon1" placeholder={this.props.inputPlaceholder} ref={this.textInput} type="text"/>
                </InputGroup>
                <div className="help-info">
                This is what determines the length and note order !
                </div>

                <div>{this.state.placeholder}</div>
            </Container>
            <br></br>
            <hr></hr>
            </>
        )
    }

}

export default ArpComponent;