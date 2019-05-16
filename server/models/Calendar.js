import React, {Component} from 'react' 
import api from '../../api'
// import Calendar from './'

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schedules: null,
      bookings: null,
  }
}

render() {
  let bookings = []
   return (
    <div className="Caledar">
    <h1>Schedule</h1>
    {this.state.schedules && <table>
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
      <td>{schedule.hour}</td>
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

  getSchedule() {
    return service
      .get('/schedules')
      .then(res => res.data)
      .catch(errHandler)
  }
}