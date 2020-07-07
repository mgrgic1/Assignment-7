import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
        <div>
            <center>
            <h1 style = {{color: 'white'}}>User Profile</h1>

          <div style = {{marginBottom: '30px'}}>
          <Link exact id = "refLink" to="/">Home</Link>
          <Link id = "refLink" to="/LogIn">Log In</Link>
          <Link id = "refLink" to="/UserProfile">My Profile</Link>
          <Link id = "refLink" to={"/Credits"}>View Credits</Link>
          <Link id = "refLink" to="/Debits">View Debits</Link>
          </div>
            </center>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>

          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default UserProfile;