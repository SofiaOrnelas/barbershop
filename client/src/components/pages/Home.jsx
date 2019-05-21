import React, { Component } from 'react';
import Calendar from './Calendar';
import StaffHome from './StaffHome'
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
            <StaffHome/>
            <SliderHome/>
            <Contacts/>
            
          </div>    
    );
  }
}