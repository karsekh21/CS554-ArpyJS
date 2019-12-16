import React from 'react';
import './chord.css';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton';
import Container from 'react-bootstrap/Container';

class ChordComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstChord: '',
            secondChord: '',
            thirdChord: '',
            fourthChord: '',
            fifthChord: '',
            sixthChord: '',
            seventhChord: '',
            eighthChord: ''
        }
        this.changeOne = this.changeOne.bind(this);
        this.changeTwo = this.changeTwo.bind(this);
        this.changeThree = this.changeThree.bind(this);
        this.changeFour = this.changeFour.bind(this);
        this.changeFive = this.changeFive.bind(this);
        this.changeSix = this.changeSix.bind(this);
        this.changeSeven = this.changeSeven.bind(this);
        this.changeEight = this.changeEight.bind(this);
        this.finalString = this.finalString.bind(this);
    }

    changeOne(val) {
        this.setState({
            firstChord: val
        });
    }
    changeTwo(val) {
        this.setState({
            secondChord: val
        });
    }
    changeThree(val) {
        this.setState({
            thirdChord: val
        });
    }
    changeFour(val) {
        this.setState({
            fourthChord: val
        });
    }
    changeFive(val) {
        this.setState({
            fifthChord: val
        });
    }
    changeSix(val) {
        this.setState({
            sixthChord: val
        });
    }
    changeSeven(val) {
        this.setState({
            seventhChord: val
        });
    }
    changeEight(val) {
        this.setState({
            eighthChord: val
        });
    }

    finalString() {
        let final = this.state.firstChord + ' ' + this.state.secondChord + ' ' + this.state.thirdChord + ' ' + this.state.fourthChord + ' ' + this.state.fifthChord + ' ' + this.state.sixthChord + ' ' + this.state.seventhChord + ' ' + this.state.eighthChord;
        this.props.chordConcat(final);
    }

    render () {
        if (this.props.scale === 'major') {
            return (
                <>
            <Container>
                <div className="title">Chord Sequence: </div>
                <div> Pick one in each column, then click Set! </div>
                <br></br>
                <div className="flex">
                <div className="firstColumn">
                <ToggleButtonGroup type="radio" name="chord" onChange={this.changeOne} vertical>
                    <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                    <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                    <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="secondColumn">
                <ToggleButtonGroup type="radio" name="chord2" onChange={this.changeTwo} vertical>
                    <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                    <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                    <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="thirdColumn">
                <ToggleButtonGroup type="radio" name="chord3" onChange={this.changeThree} vertical>
                    <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                    <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                    <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="fourthColumn">
                <ToggleButtonGroup type="radio" name="chord4" onChange={this.changeFour} vertical>
                    <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                    <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                    <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="fifthColumn">
                <ToggleButtonGroup type="radio" name="chord5" onChange={this.changeFive} vertical>
                    <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                    <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                    <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="sixthColumn">
                <ToggleButtonGroup type="radio" name="chord6" onChange={this.changeSix} vertical>
                    <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                    <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                    <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="seventhColumn">
                <ToggleButtonGroup type="radio" name="chord7" onChange={this.changeSeven} vertical>
                    <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                    <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                    <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="eighthColumn">
                <ToggleButtonGroup type="radio" name="chord8" onChange={this.changeEight} vertical>
                    <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                    <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                    <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                    <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                </ToggleButtonGroup>
                </div>
                </div>
                <br></br>
                <br></br>
                <Button variant='outline-warning' onClick={this.finalString}> Set </Button>
                <br></br>
                <br></br>
                <div>
                    {this.props.chord_sequence.length < 15 &&
                    <div className="title"> Please make sure you have selected 8 chords! </div>
                    }
                </div>
                <br></br>
                <hr></hr>
            </Container>
            </>
            )
        }
        else if (this.props.scale === 'minor') {
            return (
                <>
            <Container>
                <div className="title">Chord Sequence: </div>
                <div> Pick one in each column, then click Set! </div>
                <br></br>
                <div className="flex">
                <div className="firstColumn">
                <ToggleButtonGroup type="radio" name="chord" onChange={this.changeOne} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                    <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iv"}>iv</ToggleButton>
                    <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                    <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="secondColumn">
                <ToggleButtonGroup type="radio" name="chord2" onChange={this.changeTwo} vertical>
                <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                    <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iv"}>iv</ToggleButton>
                    <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                    <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="thirdColumn">
                <ToggleButtonGroup type="radio" name="chord3" onChange={this.changeThree} vertical>
                <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                    <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iv"}>iv</ToggleButton>
                    <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                    <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="fourthColumn">
                <ToggleButtonGroup type="radio" name="chord4" onChange={this.changeFour} vertical>
                <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                    <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iv"}>iv</ToggleButton>
                    <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                    <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="fifthColumn">
                <ToggleButtonGroup type="radio" name="chord5" onChange={this.changeFive} vertical>
                <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                    <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iv"}>iv</ToggleButton>
                    <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                    <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="sixthColumn">
                <ToggleButtonGroup type="radio" name="chord6" onChange={this.changeSix} vertical>
                <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                    <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iv"}>iv</ToggleButton>
                    <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                    <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="seventhColumn">
                <ToggleButtonGroup type="radio" name="chord7" onChange={this.changeSeven} vertical>
                <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                    <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iv"}>iv</ToggleButton>
                    <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                    <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="eighthColumn">
                <ToggleButtonGroup type="radio" name="chord8" onChange={this.changeEight} vertical>
                <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                    <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                    <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                    <ToggleButton variant="outline-light" value={"iv"}>iv</ToggleButton>
                    <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                    <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                </ToggleButtonGroup>
                </div>
                </div>
                <br></br>
                <br></br>
                <Button variant='outline-warning' onClick={this.finalString}> Set </Button>
                <br></br>
                <br></br>
                <div>
                    {this.props.chord_sequence.length < 15 &&
                    <div className="title"> Please make sure you have selected 8 chords! </div>
                    }
                </div>
                <br></br>
                <hr></hr>
            </Container>
            </>
            )
        }
        else if (this.props.scale === 'dorian') {
            return (
                <>
                <Container>
                    <div className="title">Chord Sequence: </div>
                    <div> Pick one in each column, then click Set! </div>
                    <br></br>
                    <div className="flex">
                    <div className="firstColumn">
                    <ToggleButtonGroup type="radio" name="chord" onChange={this.changeOne} vertical>
                        <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="secondColumn">
                    <ToggleButtonGroup type="radio" name="chord2" onChange={this.changeTwo} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="thirdColumn">
                    <ToggleButtonGroup type="radio" name="chord3" onChange={this.changeThree} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="fourthColumn">
                    <ToggleButtonGroup type="radio" name="chord4" onChange={this.changeFour} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="fifthColumn">
                    <ToggleButtonGroup type="radio" name="chord5" onChange={this.changeFive} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="sixthColumn">
                    <ToggleButtonGroup type="radio" name="chord6" onChange={this.changeSix} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="seventhColumn">
                    <ToggleButtonGroup type="radio" name="chord7" onChange={this.changeSeven} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="eighthColumn">
                    <ToggleButtonGroup type="radio" name="chord8" onChange={this.changeEight} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III"}>III</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"v"}>v</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    </div>
                    <br></br>
                    <br></br>
                    <Button variant='outline-warning' onClick={this.finalString}> Set </Button>
                    <br></br>
                    <br></br>
                    <div>
                        {this.props.chord_sequence.length < 15 &&
                        <div className="title"> Please make sure you have selected 8 chords! </div>
                        }
                    </div>
                    <br></br>
                    <hr></hr>
                </Container>
                </>
            )
        }
        else if (this.props.scale === 'melodic') {
            return (
                <>
                <Container>
                    <div className="title">Chord Sequence: </div>
                    <div> Pick one in each column, then click Set! </div>
                    <br></br>
                    <div className="flex">
                    <div className="firstColumn">
                    <ToggleButtonGroup type="radio" name="chord" onChange={this.changeOne} vertical>
                        <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="secondColumn">
                    <ToggleButtonGroup type="radio" name="chord2" onChange={this.changeTwo} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="thirdColumn">
                    <ToggleButtonGroup type="radio" name="chord3" onChange={this.changeThree} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="fourthColumn">
                    <ToggleButtonGroup type="radio" name="chord4" onChange={this.changeFour} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="fifthColumn">
                    <ToggleButtonGroup type="radio" name="chord5" onChange={this.changeFive} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="sixthColumn">
                    <ToggleButtonGroup type="radio" name="chord6" onChange={this.changeSix} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="seventhColumn">
                    <ToggleButtonGroup type="radio" name="chord7" onChange={this.changeSeven} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="eighthColumn">
                    <ToggleButtonGroup type="radio" name="chord8" onChange={this.changeEight} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi°"}>vi°</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    </div>
                    <br></br>
                    <br></br>
                    <Button variant='outline-warning' onClick={this.finalString}> Set </Button>
                    <br></br>
                    <br></br>
                    <div>
                        {this.props.chord_sequence.length < 15 &&
                        <div className="title"> Please make sure you have selected 8 chords! </div>
                        }
                    </div>
                    <br></br>
                    <hr></hr>
                </Container>
                </>   
            )
        }
        else if (this.props.scale === 'harmonic') {
            return (
                <>
                <Container>
                    <div className="title">Chord Sequence: </div>
                    <div> Pick one in each column, then click Set! </div>
                    <br></br>
                    <div className="flex">
                    <div className="firstColumn">
                    <ToggleButtonGroup type="radio" name="chord" onChange={this.changeOne} vertical>
                        <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="secondColumn">
                    <ToggleButtonGroup type="radio" name="chord2" onChange={this.changeTwo} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="thirdColumn">
                    <ToggleButtonGroup type="radio" name="chord3" onChange={this.changeThree} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="fourthColumn">
                    <ToggleButtonGroup type="radio" name="chord4" onChange={this.changeFour} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="fifthColumn">
                    <ToggleButtonGroup type="radio" name="chord5" onChange={this.changeFive} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="sixthColumn">
                    <ToggleButtonGroup type="radio" name="chord6" onChange={this.changeSix} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="seventhColumn">
                    <ToggleButtonGroup type="radio" name="chord7" onChange={this.changeSeven} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="eighthColumn">
                    <ToggleButtonGroup type="radio" name="chord8" onChange={this.changeEight} vertical>
                    <ToggleButton variant="outline-light" value={"i"}>i</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii°"}>ii°</ToggleButton>
                        <ToggleButton variant="outline-light" value={"III+"}>III+</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"VI"}>VI</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    </div>
                    <br></br>
                    <br></br>
                    <Button variant='outline-warning' onClick={this.finalString}> Set </Button>
                    <br></br>
                    <br></br>
                    <div>
                        {this.props.chord_sequence.length < 15 &&
                        <div className="title"> Please make sure you have selected 8 chords! </div>
                        }
                    </div>
                    <br></br>
                    <hr></hr>
                </Container>
                </>   
            )
        }
        else {
            return (
                <>
                <Container>
                    <div className="title">Chord Sequence: </div>
                    <div> Pick one in each column, then click Set! </div>
                    <br></br>
                    <div className="flex">
                    <div className="firstColumn">
                    <ToggleButtonGroup type="radio" name="chord" onChange={this.changeOne} vertical>
                        <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="secondColumn">
                    <ToggleButtonGroup type="radio" name="chord2" onChange={this.changeTwo} vertical>
                        <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="thirdColumn">
                    <ToggleButtonGroup type="radio" name="chord3" onChange={this.changeThree} vertical>
                        <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="fourthColumn">
                    <ToggleButtonGroup type="radio" name="chord4" onChange={this.changeFour} vertical>
                        <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="fifthColumn">
                    <ToggleButtonGroup type="radio" name="chord5" onChange={this.changeFive} vertical>
                        <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="sixthColumn">
                    <ToggleButtonGroup type="radio" name="chord6" onChange={this.changeSix} vertical>
                        <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="seventhColumn">
                    <ToggleButtonGroup type="radio" name="chord7" onChange={this.changeSeven} vertical>
                        <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="eighthColumn">
                    <ToggleButtonGroup type="radio" name="chord8" onChange={this.changeEight} vertical>
                        <ToggleButton variant="outline-light" value={"I"}>I</ToggleButton>
                        <ToggleButton variant="outline-light" value={"ii"}>ii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"iii"}>iii</ToggleButton>
                        <ToggleButton variant="outline-light" value={"IV"}>IV</ToggleButton>
                        <ToggleButton variant="outline-light" value={"V"}>V</ToggleButton>
                        <ToggleButton variant="outline-light" value={"vi"}>vi</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    </div>
                    <br></br>
                    <br></br>
                    <Button variant='outline-warning' onClick={this.finalString}> Set </Button>
                    <br></br>
                    <br></br>
                    <div>
                        {this.props.chord_sequence.length < 15 &&
                        <div className="title"> Please make sure you have selected 8 chords! </div>
                        }
                    </div>
                    <br></br>
                    <hr></hr>
                </Container>
                </>
            )
        }
    }

}

export default ChordComponent;