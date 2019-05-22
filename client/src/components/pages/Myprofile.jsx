import React, { Component } from 'react'
import api from '../../api';
import { convertHourNumberToString, getReadableDate, checkIfSameDays } from "../../utils";

//TODO1 - Finish MyProfile
//TODO2 - Add a new component for /profile/:userId 
export default class Myprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: null,
      schedule: [],
    }
  }

  componentDidMount() {
    api.getProfile()
      .then(profile => {
        console.log(profile)
        this.setState({
          bookings: profile.bookings,
          user: profile.user
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.user && <div>
          Name: {this.state.user.name} <br />
          Phone: {this.state.user.phone} <br />
          Email: {this.state.user.email} <br />
          <hr />
        </div>}
        {this.state.bookings && this.state.bookings.map((booking, i) => <div key={i}>

          Bookings: {this.state.bookings && getReadableDate(booking.date)} - {convertHourNumberToString(booking.hour)} <br />

        </div>)}

      </div>
    )
  }
}
