import React, { Component } from 'react'
import api from '../../api';
import { convertHourNumberToString, getReadableDate } from "../../utils";
import { Link } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

let futureReserve = 0;

//TODO - Finish MyProfile
export default class Myprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      futureReserve: 0,
      message: null, 
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

  getPreviousReserve(booking){
    if (booking.date < new Date().toISOString()) {
      console.log("TCL: Myprofile -> getPreviousReserve -> booking.date", booking.date)
      futureReserve++
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleButtonClick(event){
    if(this.state.isEditing){
      if(this.state.name == "" || this.state.phone.toString().length < 9 || this.state.email === ""){
        this.setState({
          message: 'All fields are required.'
        })
      }
      else if (!this.state.email.includes("@") || this.state.email.length < 6) {
        this.setState({
          message: 'Enter a valid email'
        })
      }
      else {
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
      }
    }else {
      this.setState({
        isEditing: true,
      })
    }
  }


  render() {
    return (
      <div className="backMyprofile">
        {this.state.user && this.state.isEditing ?
        <>
        <br></br>
          <label className="MyProfileLabel">Name: <input className="MyProfileInput" type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label> <br />
          <label className="MyProfileLabel">Phone: <input className="MyProfileInput" type="text" name="phone" value={this.state.phone} onChange={this.handleChange}/></label><br />
          <label className="MyProfileLabel">Email: <input className="MyProfileInput" type="email" name="email" value={this.state.email} onChange={this.handleChange}/></label><br /><br />
          <Button className="btnLogin-Submit" onClick={this.handleButtonClick}>Save Changes</Button> <br/><br/>
          {this.state.message}
          <hr />
        </>
        :
        <>
          <div className="MyP-Sect1">
            <p>Name: <text>{this.state.name}</text> </p><br />
            <p>Phone: <text>{this.state.phone}</text></p><br />
            <p>Email: <text>{this.state.email}</text></p><br /><br />
          <Button className="btnLogin-Submit" onClick={this.handleButtonClick}>Edit Profile</Button>
          </div>
          <hr />
        </>
        }
        <div className="MyP-Sect2">
        <h2>Future bookings</h2>
        {this.state.bookings && this.state.bookings.map((booking, i) => <div key={i}>
          {this.getFutureReserve(booking)}
        </div>)}
        </div>
        <hr />

        <div className="MyP-Sect3">
        <h2>Previous bookings</h2>
        {this.state.bookings && this.state.bookings.map((booking, i) => <div key={i}>
        {this.getPreviousReserve(booking)}
        </div>)}
        </div>
        
  {/*       <h2>Future bookings</h2>
        {this.getFutureReserve()}
        <hr />

        <h2>Previous bookings</h2>
        {this.state.bookings && this.state.bookings.map((booking, i) => <div key={i}>
          Bookings: {this.state.bookings && getReadableDate(booking.date)} - {convertHourNumberToString(booking.hour)}
          {this.getAvailibity()}
        </div>)} */}

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
  
