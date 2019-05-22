import React, { Component } from 'react'
import api from '../../api';

//TODO1 - Finish MyProfile
//TODO2 - Add a new component for /profile/:userId 
export default class Myprofile extends Component {
  constructor(props){
    super(props);
    this.state = {
      bookings: null,
      schedule: [],
    }
  }

  componentDidMount() {
    api.createProfile()
    .then(userBookings => {
      console.log(userBookings)
      this.setState({
        bookings: userBookings
      })
    })
  }

  render() {
    return (
      <div>
            Name: {this.state.bookings && this.state.bookings[0].user.name }
         <br/>
      Phone: <br/>

      Email: ... <br/>

      Bookings: ... <br/>

      </div>
    )
  }
}
