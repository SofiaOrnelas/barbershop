import React, { Component } from 'react';
import api from '../../api';

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      phone: null,
      message: null,
      name: null
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
      phone: this.state.phone,
      name: this.state.name
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
          {/* TODO introduzir nomes para o nelson ficar contente */}
          {/* TODO GMAIL FACEBOOK WHATEVER AUTENTICATION */}
          Name: <input type="text" value={this.state.name || ''} name="name" onChange={this.handleInputChange} placeholder="Enter your Name"/> <br />
          Email: <input type="text" value={this.state.email || ''} name="email" onChange={this.handleInputChange} placeholder="Enter your Email"/> <br />
          Password: <input type="password" value={this.state.password || ''} name="password" onChange={this.handleInputChange} placeholder="Enter your Password"/> <br />
          {/* TODO PHONE NUMBER PATTERN */}
          Phone: <input type="tel" maxLength="9" style={{appearance: 'none'}} value={this.state.phone || ''} name="phone" onChange={this.handleInputChange} placeholder="Enter your Phone"  pattern="[0-1]{2}-[0-1]{8}"/> <br />
          <button onClick={(e) => this.handleClick(e)}>Signup</button>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
      </div>
    );
  }
}