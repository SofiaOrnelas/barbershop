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
<<<<<<< HEAD
      lol: 0,
=======
      message: null, 
>>>>>>> d533fe28aaeb46227d4f62570d4b13a34ae0092f
      schedules: null,
      bookings: [],
      date: new Date()
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    api.getProfile()
      .then(profile => {
        this.setState({

          bookings: profile.bookings,
          user: profile.user,
          name: profile.user.name, 
          phone: profile.user.phone, 
          email: profile.user.email,
          isEditing: false,
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

<<<<<<< HEAD
  getPreviousReserve(booking){
    if (booking.date < new Date().toISOString()) {
      console.log("TCL: Myprofile -> getPreviousReserve -> booking.date", booking.date)
      lol++
    }
  }
=======

>>>>>>> d533fe28aaeb46227d4f62570d4b13a34ae0092f
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleButtonClick(event){
    if(this.state.isEditing){
      if(this.state.name != "" && this.state.phone.toString().length === 9 && this.state.email != ""){
        event.preventDefault()
        api.editProfile({
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email
        })
        this.setState({
          isEditing: false,
          message: null
        })

      } else {
        this.setState({
          message: 'All fields are required.'
        })

      }
    }else {
      this.setState({
        isEditing: true,
      })
    }
  }


  render() {
    return (
      <div>
        {this.state.user && this.state.isEditing ?
        <>
          <label>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label> <br />
          <label>Phone: <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange}/></label><br />
          <label>Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/></label><br /><br />
          <Button onClick={this.handleButtonClick}>Save Changes</Button> <br/><br/>
          {this.state.message}
          <hr />
        </>
        :
        <>
            Name: <text>{this.state.name}</text> <br />
            Phone: <text>{this.state.phone}</text><br />
            Email: <text>{this.state.email}</text><br /><br />
          <Button onClick={this.handleButtonClick}>Edit Profile</Button>
          <hr />
        </>
        }

<<<<<<< HEAD
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
=======
  {/*       <h2>Future bookings</h2>
        {this.getFutureReserve()}
        <hr />

        <h2>Previous bookings</h2>
        {this.state.bookings && this.state.bookings.map((booking, i) => <div key={i}>
          Bookings: {this.state.bookings && getReadableDate(booking.date)} - {convertHourNumberToString(booking.hour)}
          {this.getAvailibity()}
        </div>)} */}

>>>>>>> d533fe28aaeb46227d4f62570d4b13a34ae0092f
      </div>
    )
  }
}


/* handleButtonClick(){
  api.editProfile()
  .then(profile => {
  console.log(profile)
  this.setState({
  name: this.props.user.name,
  phone: this.props.user.phone,
  email: this.props.email
  })
  })
  } */
  
