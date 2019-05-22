import React, { Component } from 'react';
import Calendar from './Calendar';
import StaffHome from './StaffHome'
import SliderHome from './SliderHome'
import Contacts from './Contacts';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidUpdate(){
    if(this.props.location.hash === "#contacts"){
      var elmnt = document.getElementById("scroll");
          elmnt.scrollIntoView();
    }
  }

  componentDidMount(){
    if(this.props.location.hash === "#contacts"){
      var elmnt = document.getElementById("scroll");
          elmnt.scrollIntoView();
    }
  }
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