import React, { Component } from 'react';
import api from '../../api';

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      phone: null,
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    if(event.target.name === "phone"){
      if(event.target.value.toString().length <= 9){
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    } else {
      this.setState({
      [event.target.name]: event.target.value
    })
    }
    
  }

  handleClick(e) {
    e.preventDefault()
    if(this.state.phone && this.state.phone.toString().length === 9) {
       let data = {
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
    } else {
      this.setState({ message: "Incorrect phone number"})
    }
   
  }

  render() {
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <form>
          email: <input type="text" value={this.state.email} name="email" onChange={this.handleInputChange} /> <br />
          Password: <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} /> <br />
          Phone: <input type="tel" maxlength="9" style={{appearance: 'none'}} value={this.state.phone} name="phone" onChange={this.handleInputChange} /> <br />
          <button onClick={(e) => this.handleClick(e)}>Signup</button>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
      </div>
    );
  }
}