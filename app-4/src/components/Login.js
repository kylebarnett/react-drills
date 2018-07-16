import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super()

    this.state={
      username: '',
      password: ''
    }
  }

  handleUsernameChange(val){
    this.setState({
      username: val
    })
  }

  handlePasswordChange(val){
    this.setState({
      password: val
    })
  }

  notifyMe = () => {
    alert(`username: ${this.state.username} password: ${this.state.password}`)
  }

  render(){
    return(
      <div>
        <input type="text" placeholder="username" onChange={ (e) => {this.handleUsernameChange(e.target.value)}}></input>
        <input type="text" placeholder="password" onChange={ (e) => {this.handlePasswordChange(e.target.value)}}></input>
        <button onClick={this.notifyMe}>Login</button>
      </div>
    )
  }
}

export default Login