import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div id = "accountBalance">
          Account Balance: ${parseFloat(this.props.accountBalance).toFixed(2)}
        </div>
    );
  }
}

export default AccountBalance;