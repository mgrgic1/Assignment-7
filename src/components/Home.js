import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';


class Home extends Component {
  render() {
    return (
        <div>
          <center>
          <img id = "catMain" src="https://img-9gag-fun.9cache.com/photo/aA3B3Md_460s.jpg" alt="cat"/>
          <h1 id = "mainText">Bank of React</h1>
         
          <Link exact id = "refLink" to="/">Home</Link>
          <Link id = "refLink" to="/LogIn">Log In</Link>
          <Link id = "refLink" to="/UserProfile">My Profile</Link>
          <Link id = "refLink" to="/Credits">View Credits</Link>
          <Link id = "refLink" to="/Debits">View Debits</Link>


          <AccountBalance accountBalance={this.props.accountBalance}/>
          </center>



        </div>
    );
  }
}

export default Home;