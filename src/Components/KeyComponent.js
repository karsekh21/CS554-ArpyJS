import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Key extends Component{
  constructor(props){
    super(props);
    this.state = {items: [] };
  }

  render(){
    return(
      <button>C</button>
    )
  }
}

export default Key;
