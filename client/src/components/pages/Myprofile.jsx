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
    let firstDateOfCurrentWeek = new Date() // The value is the current date
    this.state = {
      schedules: null,
      bookings: [],
      date: firstDateOfCurrentWeek
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
  
  // getFutureReserve(booking, hour) {

  //   if((this.state.bookings && getReadableDate(booking.date)) > new Date()) return 
  //     {this.state.bookings && this.state.bookings.map((booking, i) => <div key={i}>
  //     Bookings: {this.state.bookings && getReadableDate(booking.date)} - {convertHourNumberToString(booking.hour)}
  //       {this.getAvailibity()}
  //       </div>)}
    
    // if (!schedule) return "There is no Schedule"
    // let bookingOfTheHour = schedule.bookings.find(booking => booking.hour === hour)
    // if (api.isLoggedInEmployee() && bookingOfTheHour._customer/*._id???*/ === api.getLocalStorageUser()._id)
    // return <Button onClick={() => this.cancel(schedule._id, hour)}><div style={{color:"red"}}>Cancel: {bookingOfTheHour._customer.name}</div></Button>
    
    // if (!bookingOfTheHour._customer) return "Available"
    // return <Button tag={Link} to={"/profile/"+bookingOfTheHour._customer._id} formerOnClick={() => this.cancel(schedule._id, hour)}>
    //   <div style={{color:"blue"}}> {bookingOfTheHour._customer.name} </div>
    // </Button>
    // return bookingOfTheHour._customer.name
  // }

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
        <hr />
      
        <h2>Previous bookings</h2>
        {/* {this.state.bookings && this.state.bookings.map((booking, i) => <div key={i}>
          Bookings: {this.state.bookings && getReadableDate(booking.date)} - {convertHourNumberToString(booking.hour)}
          {this.getAvailibity()}
        </div>)} */}

      </div>
    )
  }
}
