import React from 'react';
import KeyAndScaleComponent from './KeyAndScale/KeyAndScaleComponent';
import ArpComponent from './Arp/ArpComponent';
import NoteComponent from './Note/NoteComponent';
import ChordComponent from './Chord/ChordComponent';
import PatternComponent from './Pattern/PatternComponent';
import Button from 'react-bootstrap/Button';
// import scribble from 'scribbletune';


class KeyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            key: '',
            scale: '',
            arp_length: 0,
            arp_order: '',
            noteLength: '',
            chord_sequence: '',
            pattern_sequence: '',
            bpm: '',
            fileName: '',
            inputPlaceholder: ''
            // blobURL_MIDI: ''
        };
        this.keyChange = this.keyChange.bind(this);
        this.scaleChange = this.scaleChange.bind(this);
        this.lengthChange = this.lengthChange.bind(this);
        this.orderChange = this.orderChange.bind(this);
        this.noteLength = this.noteLength.bind(this);
        this.chordConcat = this.chordConcat.bind(this);
        this.patternChange = this.patternChange.bind(this);
        this.bpmChange = this.bpmChange.bind(this);
        // this.compileItAll = this.compileItAll.bind(this);
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

    orderChange(val) {
        this.setState({
            arp_order: val
        });
    }

    noteLength(val) {
        this.setState({
            noteLength: val
        });
    }

    chordConcat(val) {
        this.setState({
            chord_sequence: val
        });
    }

    patternChange(val) {
        this.setState({
            pattern_sequence: val
        })
    }

    bpmChange(val) {
        this.setState({
            bpm: val
        });
    }

    // compileItAll() {
    //     if (this.state.scale === 'melodic') {
    //         this.setState({
    //             scale: 'melodic minor'
    //         })
    //     }
    //     else if (this.state.scale === 'harmonic') {
    //         this.setState({
    //             scale: 'harmonic minor'
    //         })
    //     }

    //     let keyInfo = this.state.key + ' ' + this.state.scale;

    //     let theChords = scribble.getChordsByProgression(keyInfo, this.state.chord_sequence);

    //     let notesArr = scribble.arp({
    //         chords: theChords,
    //         count: this.state.arp_length,
    //         order: this.state.arp_order
    //     });

    //     let c = scribble.clip({
    //         notes: notesArr,
    //         pattern: this.state.pattern_sequence.repeat(notesArr.length/2),
    //         subdiv: this.state.noteLength
    //     })

    //     scribble.midi(c, null, function (err, bytes) {
    //         const b64 = btoa(bytes);
    //         const uri = 'data:audio/midi;base64,' + b64;
    //       });
    // }

    render () {
        return (
            <div className="setup">
                <br>
                </br>
                <KeyAndScaleComponent scaleChange = {this.scaleChange} keyChange={this.keyChange}/>
                <br>
                </br>
                <ArpComponent lengthChange={this.lengthChange} orderChange={this.orderChange} inputPlaceholder={this.state.inputPlaceholder}/>
                <br>
                </br>
                <NoteComponent noteLength={this.noteLength}/>
                <br>
                </br>
                <ChordComponent chord_sequence={this.state.chord_sequence} chordConcat={this.chordConcat}/>
                <br>
                </br>
                <PatternComponent patternChange={this.patternChange} pattern_sequence={this.state.pattern_sequence}/>
                <br>
                </br>
                <Button variant="outline-warning" onClick={this.compileItAll}>Give me my MIDI clip!</Button>
                <br>
                </br>
                <br>
                </br>
            </div>
        )
    }



}

export default KeyComponent;