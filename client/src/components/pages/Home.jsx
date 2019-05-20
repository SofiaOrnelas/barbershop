import React, { Component } from 'react';
import Calendar from './Calendar';
import Staff from './Staff'
import SliderHome from './SliderHome'
import Contacts from './Contacts';




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
            <SliderHome/>
            {/* <div className="sliderHome">
               <p>Slider</p>
             </div> */}
             <Contacts/>
            
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