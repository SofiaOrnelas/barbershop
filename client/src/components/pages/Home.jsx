import React, { Component } from 'react';

export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {                
    return (
      <div className="Home">
        <h2>Welcome to Barbearia Du'Arte!</h2>
        <p>Have fun <span role="img" aria-label="smile">😀</span></p>
      </div>
    );
  }
}
