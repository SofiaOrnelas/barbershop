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
            <Calendar/>      
            <Staff/>
          </div>      
      // <div className="sliderHome">
      //   <p>Slider</p>
      // </div>
      // <div className="contacts">
      //   <p>Contactos</p>
      // </div>
    
    );
  }
}