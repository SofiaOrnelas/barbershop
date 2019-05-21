import React, { Component } from 'react'
import api from '../../api';
import { convertHourNumberToString, getReadableDate, checkIfSameWeeks, checkIfSameDays } from "../../utils";
import { Button } from "reactstrap";
import CreateSchedule from "../CreateSchedule"

export default class Employee extends Component {
  constructor(props) {
    super(props)
    let firstDateOfCurrentWeek = new Date() // The value is the current date
    firstDateOfCurrentWeek.setDate(firstDateOfCurrentWeek.getDate() - firstDateOfCurrentWeek.getDay() +1)
    this.state = {
      schedules: null,
      bookings: [],
      date: firstDateOfCurrentWeek
    }
    this.increaseDate = this.increaseDate.bind(this)
    this.decreaseDate = this.decreaseDate.bind(this)
  }

  getPossibleHours() {
    return [9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5]
  }

  getDatesOfTheWeek() {
    let result = []
    let d = this.state.date
    for (let i = 0; i < 7; i++) {
      result.push(new Date(d.getFullYear(), d.getMonth(), d.getDate() + i))
    }
    return result
  }

  getSchedulesOfTheWeek() {
    return this.state.schedules.filter((schedule, i) => checkIfSameWeeks(schedule.date, this.state.date))
  }

  getScheduleOfTheDate(date) {
    return this.state.schedules.find((schedule, i) => checkIfSameDays(schedule.date, date))
  }

  // Method that returns "Off", "Unavailable" or "Available"
  getAvailibity(schedule, hour) {
    if (!schedule) return "Test"
    let bookingOfTheHour = schedule.bookings.find(booking => booking.hour === hour)
    if (!bookingOfTheHour) return "Off"
    if (!bookingOfTheHour._customer) return "Available"
    return bookingOfTheHour._customer.name
  }


  increaseDate() {
    this.state.date.setDate(this.state.date.getDate() + 7);
    this.setState({ date: this.state.date })
  }

  decreaseDate() {
    this.state.date.setDate(this.state.date.getDate() - 7);
    this.setState({ date: this.state.date })
  }

  getTableData(i, date, hour) {
    let className = ""
    if (date < this.state.date) className += "disabled" // TODO: change the condition
    if (!this.getScheduleOfTheDate(date)) {
      if (i === 0)
        return <td className={className} rowSpan={this.getPossibleHours().length}>
          <CreateSchedule date={date} onCreate={() => this.callTheApiToGetSchedulesOfConnectedEmployee()} />
        </td>
    }
    else {
      return <td className={className} key={date}>
        {this.getAvailibity(this.getScheduleOfTheDate(date), hour)}
      </td>
    }
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
              {this.getDatesOfTheWeek().map(date => <th key={date}>
                {getReadableDate(date)}
              </th>)}
            </tr>
          </thead>
          <tbody>
            {this.getPossibleHours().map((hour,iHour) => <tr key={hour}>
              <td>{convertHourNumberToString(hour)}</td>
              {this.getDatesOfTheWeek().map((date) => this.getTableData(iHour, date, hour))}
              {/* {this.getSchedulesOfTheWeek().map(schedule => <td key={schedule._id}>
              {this.getAvailibity(schedule, hour)}
            </td>)} */}
            </tr>)}
          </tbody>
        </table>}
      </div>
    );
  }

  callTheApiToGetSchedulesOfConnectedEmployee() {
    console.log(this.state.date)
    api.getSchedulesOfConnectedEmployee()
      .then(schedules => {
        console.log(schedules)
        this.setState({
          schedules: schedules
        })
      })

  }

  componentDidMount() {
    this.callTheApiToGetSchedulesOfConnectedEmployee()
  }
}