import React, { Component } from 'react'
import  { Button } from 'reactstrap'


// TODO:
// - Create 2 states: isWorkingMorning and isWorkingAfternoon, initially to true
// - Bind the states with inputs (if the input is changed, the state is changed)
// - Add onSubmit on the form, that create a new schedule (rely on this.props.date) and do not forget event.preventDefault()
// - Inside the code of the onSubmit, do: this.props.onCreate()

export default class CreateSchedule extends Component {
   constructor (props){
    super(props)
    this.state = {
      date: '',
      isWorkingAfternoon: true,
      isWorkingMorning: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) { 
    const {name, value, type, checked} =event.target
    type === 'checkbox' ? 
    this.setState({[name] : checked}) : this.setState({[name] : value})
  }
  handleSubmit(event){
    event.PreventDefault()
    let newSchedule = {
      date: this.props.date
    }
  }
   OnCreate(){
   // return newSchedule
  }

  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      Morning: 
      <input 
        type="checkbox" 
        name="isWorkingMorning"
        checked={this.state.isWorkingMorning} 
        onChange={this.handleChange} /> <br/>
      Afternoon: 
      <input 
        type="checkbox" 
        name="isWorkingAfternoon"
        checked={this.state.isWorkingAfternoon} 
        onChange={this.handleChange}/><br/>
      <Button onSubmit={() => this.props.OnCreate()}>Add Schedule</Button>
      </form>
    )
  }
}
