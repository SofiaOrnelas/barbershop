import React, { Component } from 'react';
import api from '../../api';
import { convertHourNumberToString, getReadableDate, checkIfSameDays } from "../../utils";
import { Button } from "reactstrap";

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

  // Method that returns "Off", "Unavailable" or "Available"
  getAvailibity(schedule, hour) {
    let bookingOfTheHour = schedule.bookings.find(booking => booking.hour === hour)
    if (!bookingOfTheHour) return "Off"
    if (!bookingOfTheHour._customer) return "Available"
    return "Unavailable"
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
      <div className="Calendar">
        <h1>Schedule</h1>

        <Button onClick={this.decreaseDate}>Before</Button>
        {getReadableDate(this.state.date)}
        <Button onClick={this.increaseDate}>After</Button>

        {!this.state.schedules && <div>Loading...</div>}
        {this.state.schedules && <table className="shedules-list">
          <thead>
            <tr>
              <th></th>
              {this.getSchedulesOfTheDay().map(schedule =>
                <th key={schedule._id}>{schedule._employee.name}</th>)}
            </tr>
          </thead>
          <tbody>
            {this.getPossibleHours().map(hour => <tr key={hour}>
              <td>{convertHourNumberToString(hour)}</td>
              {this.getSchedulesOfTheDay().map(schedule => <td key={schedule._id}>
                {this.getAvailibity(schedule, hour)}
              </td>)}
            </tr>)}
          </tbody>
        </table>}
      </div>
    );
  }

  componentDidMount() {
    console.log(this.state.date)
    api.getSchedules()
      .then(schedules => {
        console.log(schedules)
        this.setState({
          schedules: schedules
        })
      })
  }
}