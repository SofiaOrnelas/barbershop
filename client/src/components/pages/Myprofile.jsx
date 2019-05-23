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
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    api.getProfile()
      .then(profile => {
        console.log(profile)
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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleButtonClick(event){
    if(this.state.isEditing){
      event.preventDefault()
      api.editProfile({
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email
      })
      this.setState({
        isEditing: false,
      })
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
          <Button onClick={this.handleButtonClick}>Save Changes</Button>
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
  
