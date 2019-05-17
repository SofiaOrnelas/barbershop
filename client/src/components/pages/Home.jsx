import React, { Component } from 'react';

export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {                
    return (
    <div>
      <div className="calendar">
        <img src="/backCalend.jpg" width="100%" alt="staff.png"></img>
        <h2>Calendario a Bombar faxavor!</h2>
      </div>

      <div className="staff">
        <img src="/staff.jpg" width="100%" alt="staff.png"></img>
      </div>
      <div className="sliderHome">
        <p>Slider</p>
      </div>
      <div className="contacts">
        <p>Contactos</p>
      </div>
    </div>
    );
  }
}