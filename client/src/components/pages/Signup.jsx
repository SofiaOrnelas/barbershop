import React, { Component } from 'react';
import api from '../../api';
import { Button, Form, FormGroup, Input } from 'reactstrap';

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
    <div className="ContainerLogin">
      <div className="Signup">
        <h2>Signup</h2>
        <Form>
          <FormGroup className="testForm">
            <Input type="text" value={this.state.name || ''} name="name" onChange={this.handleInputChange} id="exampleEmail" placeholder="Enter your Name" /><br />
            <Input type="text" value={this.state.email || ''} name="email" onChange={this.handleInputChange} id="exampleEmail" placeholder="Enter your Email" /><br />
          </FormGroup>
          <FormGroup>
          <Input type="password" value={this.state.password || ''} name="password" onChange={this.handleInputChange} id="examplePassword" placeholder="Enter your Password" /><br /> 
            <Input type="tel" maxLength="9" style={{appearance: 'none'}} value={this.state.phone || ''} name="phone" onChange={this.handleInputChange} id="examplePhone" placeholder="Enter your Phone"  pattern="[0-1]{2}-[0-1]{8}" /><br />
          
            {/* <Input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} id="examplePassword" placeholder="Password" /><br /> */}
          </FormGroup> 
        <Button className="btnLogin-Submit" onClick={(e) => this.handleClick(e)}>Submit</Button>
      </Form>  
       {this.state.message && <div className="info info-danger">
       {this.state.message}
       </div>}
      </div>
    </div>

   );
  }
}
