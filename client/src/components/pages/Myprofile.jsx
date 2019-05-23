import React, { Component } from 'react'
import api from '../../api';
import { convertHourNumberToString, getReadableDate } from "../../utils";
import { Button } from "reactstrap";
import { Link } from "react-router-dom"

let lol = 0;

//TODO - Finish MyProfile
export default class Myprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lol: 0,
      schedules: null,
      bookings: [],
      date: new Date()
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  getFutureReserve(booking) {
    if (booking.date > new Date().toISOString()) {
      return (
        <h1>{getReadableDate(booking.date)}</h1>
      )
    }

  }

  getPreviousReserve(booking){
    if (booking.date < new Date().toISOString()) {
      console.log("TCL: Myprofile -> getPreviousReserve -> booking.date", booking.date)
      lol++
    }
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(){
    api.editProfile({
      name: this.props.user.name,
      phone: this.props.user.phone,
      email: this.props.email
    })
  }


  render() {
    return (
      <div>
        {this.state.user && 
        <form onSubmit={this.handleSubmit}>
          <label>Name: <input type="text" value={this.state.user.name} onChange={this.handleChange}/></label> <br />
          <label>Phone: <input type="text" value={this.state.user.phone} onChange={this.handleChange}/></label><br />
          <label>Email: <input type="text" value={this.state.user.email} onChange={this.handleChange}/></label><br /><br />
          <Button>Edit Profile</Button>
          <hr />
        </form>}

        <h2>Future bookings</h2>
        {this.state.bookings && this.state.bookings.map((booking, i) => <div key={i}>
          {this.getFutureReserve(booking)}
        </div>)}
        <hr />

        <h2>Previous bookings</h2>
        {this.state.bookings && this.state.bookings.map((booking, i) => <div  key={i}>
        {this.getPreviousReserve(booking)}
        </div>)}
        {lol}
      </div>
    )
  }
}
