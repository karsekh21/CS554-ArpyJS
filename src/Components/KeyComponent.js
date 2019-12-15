import React from 'react';
import KeyAndScaleComponent from './KeyAndScale/KeyAndScaleComponent';
import ArpComponent from './Arp/ArpComponent';
import NoteComponent from './Note/NoteComponent';
import ChordComponent from './Chord/ChordComponent';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PatternComponent from './Pattern/PatternComponent';

class KeyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chordSequence: '',
            stepSequence: '',
            bpm: '',
            fileName: ''
        };
    }

    render () {
        return (
            <div className="setup">
                <br>
                </br>
                <KeyAndScaleComponent />
                <br>
                </br>
                <ArpComponent />
                <br>
                </br>
                <NoteComponent />
                <br>
                </br>
                <ChordComponent />
                <br>
                </br>
                <PatternComponent />
            </div>
        )
    }



}

export default KeyComponent;