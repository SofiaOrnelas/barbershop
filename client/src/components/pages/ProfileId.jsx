import React, { Component } from 'react'
import api from '../../api';
import { convertHourNumberToString, getReadableDate, checkIfSameDays, checkIfSameWeeks } from "../../utils";
import { Button } from "reactstrap";
// import Employee from './pages/Employee';

export default class ProfileId extends Component {

  constructor(props) {  	
    super(props);
    this.state = {
      bookings: null,
      schedule: [],
      user: null,
    }
  }

  componentDidMount() {
    api.getProfileId(this.props.match.params.id)
      .then(profile => {
				console.log("TCL: ProfileId -> componentDidMount -> profile", profile)
        
        this.setState({
          bookings: profile.bookings,
          user: profile.user,
          scheduleId: profile.scheduleId
        })
      })
  }

  cancel(_id, hour) {
    api.cancel(_id, hour)
    .then(() => {
      api.getSchedulesOfConnectedEmployee()
      .then(schedules => {
        console.log(schedules)
        this.setState({
          schedules: schedules
        })
      })
    })
    .catch(err => console.log(err.toString()))
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
      {this.state.bookings && getReadableDate(booking.date)} - {convertHourNumberToString(booking.hour)} 
       <Button onClick={() => this.cancel(this.state.scheduleId, booking.hour)}><div style={{color:"red"}}>Cancel</div></Button>

      </div>)}

    </div>
    )
  }
  
}



