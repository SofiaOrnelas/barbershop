import React, {Component} from 'react' 
import api from '../../api'

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schedules: null,
      bookings: [],
  }
}

render() {
  // let bookings = []
   return (
    <div className="Calendar">
    <h1>Schedule</h1>
    {!this.state.streetArts && <div>Loading...</div>}
    {this.state.schedules && <table hover className="shedules-list">
    <thead>
      <tr>
        <th>Barber1</th>
        <th>Barber2</th>
        <th>Barber3</th>
        <th>Barber4</th>
        <th>Barber5</th>
      </tr>
    </thead>
    <tbody>
    {this.state.schedules.map(schedule => <tr key={schedule._id}>
      <td></td>
      <td>{schedule}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
      )}
    </tbody>
  </table>}
</div>
);
} 

  componentDidMount() {
    api.getSchedule()
      .then(schedule => {
        console.log(schedule)
        this.setState({
          schedule
        })
      })
  }
}