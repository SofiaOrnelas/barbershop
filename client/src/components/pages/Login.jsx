import React, { Component } from 'react';
import api from '../../api';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    api.login(this.state.email, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
    <div className="ContainerLogin">
      <div className="Login">
      <h2>Login</h2>
         <Form>
        <FormGroup>
          
          <Input type="text" value={this.state.email} name="email" onChange={this.handleInputChange} id="exampleEmail" placeholder="Email" /><br />
        </FormGroup>
        {' '}
        <FormGroup>
         
          <Input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} id="examplePassword" placeholder="Password" /><br />
        </FormGroup>
        {' '}
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


      /* <h2>Login</h2>
      {/* <Input type="email" name="email" id="exampleEmail" placeholder="Email" /> */
          /* type="text" value={this.state.email} name="email" onChange={this.handleInputChange} 

        <form>
          Email: <input type="text" value={this.state.email} name="email" onChange={this.handleInputChange} /> <br />
          Password: <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} /> <br />
          <button onClick={(e) => this.handleClick(e)}>Login</button>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
      </div> */