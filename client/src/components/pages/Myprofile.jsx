import React, { Component } from 'react'
import api from '../../api';
import { convertHourNumberToString, getReadableDate, checkIfSameDays, checkIfSameWeeks } from "../../utils";
import { Button } from "reactstrap";

//TODO - Finish MyProfile
export default class Myprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: null,
      schedule: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <h2>Previous bookings</h2>
        {this.state.bookings && this.state.bookings.map((booking, i) => <div key={i}>

          Bookings: {this.state.bookings && getReadableDate(booking.date)} - {convertHourNumberToString(booking.hour)}
          {/* <Button onClick={() => this.cancel(schedule._id, hour)}><div style={{color:"red"}}>Cancel: {bookingOfTheHour._customer.name}</div></Button> <br /> */}

        </div>)}

      </div>
    )
  }
}
