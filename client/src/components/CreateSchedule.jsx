import React, { Component } from 'react'
import  { Button } from 'reactstrap'

// TODO:
// - Create 2 states: isWorkingMorning and isWorkingAfternoon, initially to true
// - Bind the states with inputs (if the input is changed, the state is changed)
// - Add onSubmit on the form, that create a new schedule (rely on this.props.date) and do not forget event.preventDefault()
// - Inside the code of the onSubmit, do: this.props.onCreate()

export default class CreateSchedule extends Component {
  render() {
    return (
      <form>
        Morning: <input type="checkbox" name="isWorkingMorning" /> <br/>
        Afternoon: <input type="checkbox" name="isWorkingAfternoon" /><br/>
        <Button>Add Schedule</Button>
      </form>
    )
  }
}
