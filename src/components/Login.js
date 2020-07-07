import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
              <center>
              <h1 style = {{color: 'white'}}>Log In</h1>

                <div style = {{marginBottom: '20px'}}>
                <Link exact id = "refLink" to="/">Home</Link>
          <Link id = "refLink" to="/LogIn">Log In</Link>
          <Link id = "refLink" to="/UserProfile">My Profile</Link>
          <Link id = "refLink" to={"/Credits"}>View Credits</Link>
          <Link id = "refLink" to="/Debits">View Debits</Link>
          </div>
          </center>

            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>


        <AccountBalance accountBalance={this.props.accountBalance}/>
      </div>
    )
  }
}

export default LogIn