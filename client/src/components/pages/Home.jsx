import React, { Component } from 'react';
import Calendar from './Calendar';
import Staff from './Staff'
export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {                
    return (
      <div>
          <div>
            <p>Homepage</p>
            <Calendar/>      
            <Staff/>
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