import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class StaffHome extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {                
    return (
        <div>
          <Link to="./StaffPage.jsx" className="staff-button staff-button-home">Meet Our Staff !</Link>
        </div>

      //  <div className="staff">
      //     {/* <Link to="./StaffPage.jsx" className="Staff-button Staff-button-home">Meet Our Staff !</Link> */}
        
      //       <img src="/staff.jpg" width="100%" alt="staff.png"></img>
      //      <a href="./StaffPage.jsx" target=""><p>Meet Our Staff !</p></a>
         
      //  </div>
    )
  }
}
