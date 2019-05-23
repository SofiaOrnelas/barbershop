import React, { Component } from 'react'
import api from '../../api';
import { convertHourNumberToString, getReadableDate } from "../../utils";
import { Button } from "reactstrap";
import { Link } from "react-router-dom"



//TODO1 - Finish MyProfile
//TODO2 - Add a new component for /profile/:userId 
export default class Myprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: null,
      bookings: [],
      date: new Date()
    }
  }

  componentDidMount() {
    api.getProfile()
      .then(profile => {
        this.setState({
          bookings: profile.bookings,
          user: profile.user
        })
      })
  }

  getFutureReserve(booking, hour) {

    if ((this.state.bookings && getReadableDate(booking.date)) > new Date()) {
      return (
          this.state.bookings && this.state.bookings.map((booking, i) => <div key={i}>
            Bookings: {this.state.bookings && getReadableDate(booking.date)} - {convertHourNumberToString(booking.hour)}
            {this.getAvailibity()}
          </div>
          )
        )
    }

  }

  // getPreviousReserve(){


  // }


  render() {
    return (
      <div>
        {this.state.user && <div>
          Name: {this.state.user.name} <br />
          Phone: {this.state.user.phone} <br />
          Email: {this.state.user.email} <br />
          <hr />
        </div>}

        <h2>Future bookings</h2>
        {this.getFutureReserve()}
        <hr />

        <h2>Previous bookings</h2>
        {this.state.bookings && this.state.bookings.map((booking, i) => <div key={i}>
          Bookings: {this.state.bookings && getReadableDate(booking.date)} - {convertHourNumberToString(booking.hour)}
          {this.getAvailibity()}
        </div>)}

      </div>
    )
  }
}
