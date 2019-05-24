import React, { Component } from 'react';
import api from '../../api';
import { convertHourNumberToString, getReadableDate, checkIfSameDays } from "../../utils";
import { Button } from "reactstrap";
// import { REPLServer } from 'repl';
import { NavLink as NLink } from 'react-router-dom';


export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schedules: null,
      bookings: [],
      date: new Date()
    }
    this.increaseDate = this.increaseDate.bind(this)
    this.decreaseDate = this.decreaseDate.bind(this)
  }

  getPossibleHours() {
    return [9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5]
  }
  getSchedulesOfTheDay() {
    return this.state.schedules.filter((schedule, i) => checkIfSameDays(schedule.date, this.state.date)) 
  }

  reserve(_id, hour) {
    api.reserve(_id, hour)
    .then(() => {
      api.getSchedules()
      .then(schedules => {
        console.log(schedules)
        this.setState({
          schedules: schedules
        })
      })
    })
    .catch(err => console.log(err.toString()))
  }

  // Method that returns "Off", "Unavailable" or "Available"
  getAvailibity(schedule, hour) {
    let bookingOfTheHour = schedule.bookings.find(booking => booking.hour === hour)
    if (!bookingOfTheHour) return  <div style={{color:"red"}}>Off</div> 
    
    // TODO HELP REDIRECT TO LOGIN WHEN TRY TO RESERVE WITHOUT AN ACCOUNT
    if (!bookingOfTheHour._customer  && !api.isLoggedIn()) 
    return <Button onClick={() => this.reserve(schedule._id, hour)} tag={NLink} to="/login"><div style={{color:"white"}}>Reserve</div></Button>
    // {!api.isLoggedIn() 
    
    if (!bookingOfTheHour._customer) 
    return <Button onClick={() => this.reserve(schedule._id, hour)}><div style={{color:"white"}}>Reserve</div></Button>
    



    if (api.isLoggedIn() && bookingOfTheHour._customer._id === api.getLocalStorageUser()._id) return bookingOfTheHour._customer.name
    return <div style={{color:"red"}}>Unavailable</div>
  }

  increaseDate() {
    this.state.date.setDate(this.state.date.getDate() + 1);
    this.setState({ date: this.state.date })
  }

  decreaseDate() {
    this.state.date.setDate(this.state.date.getDate() - 1);
    this.setState({ date: this.state.date })
  }


  render() {
    return (
    <div className="DivBack-Calendar">
      <div className="Calendar">
        <h1>Schedule</h1>

        <Button onClick={this.decreaseDate} className="shedule-btn">Before</Button>
        {/* // ----------- DATA DO CALENDÁRIO ----------- */}
        <a className="Date-Home">{getReadableDate(this.state.date)}</a>
        <Button onClick={this.increaseDate} className="shedule-btn">After</Button>

        {!this.state.schedules && <div>Loading...</div>}
        <div className="table-container">
        {this.state.schedules && <table className="shedules-list">
          <thead>
            <tr>
              <th></th>
              {this.getSchedulesOfTheDay().map(schedule => <th className="NomeBarbeiro" key={schedule._id}>
                {schedule._employee && schedule._employee.name}
              </th>)}
            </tr>
          </thead>
          <tbody>
            {this.getPossibleHours().map(hour => <tr key={hour}>
              <td  className="hours">{convertHourNumberToString(hour)}</td>
              {this.getSchedulesOfTheDay().map(schedule => <td key={schedule._id}>
                {this.getAvailibity(schedule, hour)}
              </td>)}
            </tr>)}
          </tbody>
        </table>}
        </div>
      </div>
    </div>
    );
  }

  componentDidMount() {
    console.log(this.state.date)
    api.getSchedules()
      .then(schedules => {
        this.setState({
          schedules: schedules
        })
      })
  }
}