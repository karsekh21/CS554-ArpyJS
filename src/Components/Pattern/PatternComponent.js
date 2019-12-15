import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
class PatternComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.patternCreation = this.patternCreation.bind(this);
        this.patternInput = React.createRef();
    }

    patternCreation() {
        let val = this.patternInput.current.value
        this.props.patternChange(val);
    }

    render () {
        return (
            <>
            <Container>
                <div className="title">Pattern Sequence:</div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <Button variant="outline-light" type="submit" onClick={this.patternCreation}>Set</Button>
                    </InputGroup.Prepend>
                    <FormControl aria-describedby="basic-addon1" placeholder="8 characters required, x's and -'s only! (i.e. xx-xxx--)" ref={this.patternInput} type="text"/>
                </InputGroup>
                <div className="help-info">
                This is what determines the rhythm !
                </div>
                {this.props.pattern_sequence.length < 8 &&
                    <div> Make sure there are 8 characters! </div> 
                }
            </Container>
            <br></br>
            <hr></hr>
            </>
        )
    }

}

export default PatternComponent;