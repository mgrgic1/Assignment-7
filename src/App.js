import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import './App.css';
import Credits from './components/Credits';
import Debits from './components/Debits';
import AccountBalance from './components/AccountBalance';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      creditsDesc: [],
      debitsDesc: [],
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

addCredit = (amount, creditTransactions) => {
this.setState({
  accountBalance: this.state.accountBalance + Number(amount),
  creditsDesc: creditTransactions
});
}

removeDebit = (amount, debitTransactions) => {
this.setState({
  accountBalance: this.state.accountBalance - Number(amount),
  debitsDesc: debitTransactions
});

}



  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {

    const HomeComponent = () => (
    <Home accountBalance={this.state.accountBalance}/>
    );

    const UserProfileComponent = () => (
    <UserProfile accountBalance = {this.state.accountBalance} 
    userName={this.state.currentUser.userName} 
    memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (
    <LogIn accountBalance = {this.state.accountBalance} 
      user={this.state.currentUser} 
      mockLogIn={this.mockLogIn} 
      {...this.props}/>);

    const CreditsComponent = () => (
    <Credits
      accountBalance = {this.state.accountBalance}
      addCredit = {this.addCredit}
      currentCreditsDesc = {this.state.creditsDesc}
    />
    );
    
    const DebitsComponent = () => (
    <Debits
    accountBalance = {this.state.accountBalance}
    removeDebit = {this.removeDebit}
    currentDebitsDesc = {this.state.debitsDesc}
    />
    );

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/Credits" render={CreditsComponent}/>
            <Route exact path="/Debits" render={DebitsComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;