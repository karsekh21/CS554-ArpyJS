import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton';
import Container from 'react-bootstrap/Container';

class NoteComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
            <Container>
            <div className="title">Note Length: </div>
            <ToggleButtonGroup type="radio" name="note" onChange={this.props.noteLength}>
                <ToggleButton variant="outline-light" value={"2n"}>1/2 note</ToggleButton>
                <ToggleButton variant="outline-light" value={"4n"}>1/4 note</ToggleButton>
                <ToggleButton variant="outline-light" value={"8n"}>1/8 note</ToggleButton>
                <ToggleButton variant="outline-light" value={"16n"}>1/16 note</ToggleButton>
            </ToggleButtonGroup>
            <br></br>
            <br></br>
            <div className="help-info">
                The smaller the fraction, the faster the arp!
            </div>
            <br></br>
            <hr></hr>
            </Container>
            </>
        )
    }

}

export default NoteComponent;