import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HomepageComponent from './Components/Homepage/HomepageComponent';
import KeyComponent from './Components/KeyComponent';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showHome: true,
      showKeys: false,
      data: null,
      fileNames: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
    
    this.callBackendAPI2()
      .then(res => this.setState({ fileNames: res.express }))
  }

  callBackendAPI = async () => {
    const res = await fetch('/express');
    const body = await res.json();

    if (res.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  callBackendAPI2 = async () => {
    const res = await fetch('http://localhost:5000/files');
    const body = await res.json();

    if (res.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };


  homePage = () => {
    this.setState({
      showHome: true,
      showKeys: false
    })
  }

  keysAndScales = () => {
    this.setState({
      showHome: false,
      showKeys: true
    });
  }

  handleClick(val) {
    fetch('http://localhost:5000/file/:' + val)
  }

  render () {
      let dropdown;
      
      if (this.state.fileNames != null) {
        dropdown = <NavDropdown title="Uploaded Files" id="basic-nav-dropdown">
                      {this.state.fileNames.map(file => <NavDropdown.Item value={file._id} onClick={this.handleClick}>{file.originalname}</NavDropdown.Item>)}
                    </NavDropdown>
      }
      else {
        dropdown = <div> no recent files </div>
      }

      

    return (
    <div className="App">
      {/* <NavbarComponent /> */}
      <div className="nav-custom">
          <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
          <Navbar.Brand onClick={this.homePage}>Arpy JS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link onClick={this.homePage}>Home</Nav.Link>
              <Nav.Link onClick={this.keysAndScales}>Arpeggiator</Nav.Link>
              {dropdown}
              </Nav>
          </Navbar.Collapse>
          </Navbar>
          {this.state.data === null &&
            <div className="title"> ERR_CONN_NOT_FOUND </div>
          }
          {this.state.showHome &&
            <HomepageComponent />
          }
          {this.state.showKeys &&
            <KeyComponent />
          }
      </div>
    </div>
    );
  }

}

export default App;
