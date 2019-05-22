import React, { Component } from 'react'

export default class Myprofile extends Component {
  constructor(props){
    super(props);
    this.state = {
/*         name: this.state.name, 
        phone: this.state.phone,
        email: this.state.email, 
        bookings: this.state.bookings, */
    }
  }
  render() {
    return (
      <div>
          Name: ...  <br />
          Phone: ... <br/>
          Email: ... <br/>
          Bookings: ... <br/>
      </div>
    )
  }
}
