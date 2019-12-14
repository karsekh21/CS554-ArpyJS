import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComponent  from './Components/navbarComponent';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HomepageComponent from './Components/HomepageComponent';
import keyAndScaleComponent from './Components/keyAndScaleComponent';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showHome: true,
      showKeys: false
    };
  }

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

  render () {



    return (
    <div className="App">
      {/* <NavbarComponent /> */}
      <div className="nav-custom">
          <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand onClick={this.homePage}>Arpy JS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link onClick={this.homePage}>Home</Nav.Link>
              <Nav.Link onClick={this.keysAndScales}>Keys and Scales</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Options</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Save Session</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Load Last Session</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Documentation</NavDropdown.Item>
              </NavDropdown>
              </Nav>
          </Navbar.Collapse>
          </Navbar>
          {this.state.showHome &&
            <HomepageComponent />
          }
          {this.state.showKeys &&
            <keyAndScaleComponent />
          }
      </div>
    </div>
    );
  }

}

export default App;
