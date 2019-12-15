import React from 'react';
import keyComponent from './keyComponent';
import scaleComponent from './scaleComponent';
import arpLengthComponent from './arpLengthComponent';
import arpOrderComponent from './arpOrderComponent';
import noteLengthComponent from './noteLengthComponent';
import chordSequenceComponent from './chordSequenceComponent';
import patternstepSequencerComponent from './patternstepSequencerComponent';
import BPMComponent from './BPMComponent';
import './homepage.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function KeyAndScaleComponent(){
    return(
      <div className="homepage">
          <br></br>
          <Container>
            <div className="keyButtons">
              <h3>Key</h3>
              <button>C</button>
              <button>Dd</button>
              <button>D</button>
              <button>Eb</button>
              <button>E</button>
              <button>F</button>
              <button>Gb</button>
              <button>G</button>
              <button>Ab</button>
              <button>A</button>
              <button>Bb</button>
              <button>B</button>
            </div>

            <div className="scaleButtons">
              <h3>Scale</h3>
              <button>major</button>
              <button>minor</button>
              <button>dorian</button>
              <button>lydian</button>
              <button>mixolydian</button>
              <button>phrygian</button>
              <button>locrian</button>
              <button>melodic minor</button>
              <button>harmonic minor</button>
            </div>

            <div className="arpLengthButtons">
              <h3>Key</h3>
              <button>2</button>
              <button>4</button>
              <button>8</button>
            </div>

            <div className="arpOrderButtons">
              <h3>Arp order</h3>
              <button>0123</button>
              <button>3210</button>
              <button>1032</button>
              <button>2301</button>
              <button>010203</button>
              <button>101312</button>
              <button>232021</button>
              <button>323130</button>
              <button>001002003</button>
              <button>110113112</button>
              <button>223220221</button>
              <button>332331330</button>
            </div>

            <div className="chordsSequenceButtons">
              <h3>Chords Sequence</h3>
              <div>
                <button>I</button>
                <button>II</button>
                <button>III</button>
                <button>IV</button>
                <button>V</button>
                <button>V°</button>
                <button>VI</button>
                <button>VII</button>
              </div>
              <div>
                <button>I</button>
                <button>II</button>
                <button>III</button>
                <button>IV</button>
                <button>V</button>
                <button>V°</button>
                <button>VI</button>
                <button>VII</button>
              </div>
              <div>
                <button>I</button>
                <button>II</button>
                <button>III</button>
                <button>IV</button>
                <button>V</button>
                <button>V°</button>
                <button>VI</button>
                <button>VII</button>
              </div>
              <div>
                <button>I</button>
                <button>II</button>
                <button>III</button>
                <button>IV</button>
                <button>V</button>
                <button>V°</button>
                <button>VI</button>
                <button>VII</button>
              </div>
              <div>
                <button>I</button>
                <button>II</button>
                <button>III</button>
                <button>IV</button>
                <button>V</button>
                <button>V°</button>
                <button>VI</button>
                <button>VII</button>
              </div>
              <div>
                <button>I</button>
                <button>II</button>
                <button>III</button>
                <button>IV</button>
                <button>V</button>
                <button>V°</button>
                <button>VI</button>
                <button>VII</button>
              </div>
              <div>
                <button>I</button>
                <button>II</button>
                <button>III</button>
                <button>IV</button>
                <button>V</button>
                <button>V°</button>
                <button>VI</button>
                <button>VII</button>
              </div>
              <div>
                <button>I</button>
                <button>II</button>
                <button>III</button>
                <button>IV</button>
                <button>V</button>
                <button>V°</button>
                <button>VI</button>
                <button>VII</button>
              </div>
            </div>

            <div className="PatternStepsequencer">
              <h3>Pattern/Step Sequencer</h3>
              <form>
                <input type="text"></input><p>Use x and - only</p>
              </form>
            </div>

            <div className="BPM">
              <h3>BPM</h3>
              <form>
                <input type="text"></input>
                <br></br>
                <input type="submit" value="Play"></input>
                <input type="submit" value="Stop"></input>
                <input type="submit" value="MIDI"></input>
              </form>
            </div>

          </Container>
      </div>
    )
}

export default KeyAndScaleComponent;
