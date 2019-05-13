import React, { Component } from 'react'
import Calendar from 'react-calendar/dist/entry.nostyl';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dates: new Date(),
      calendarType: "ISO 8601"
    }
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="App">
        <Calendar 
          onChange={this.onChange}
          value={this.state.date} 
         />
      </div>
    );
  }
}