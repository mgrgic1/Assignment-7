import React, {Component} from 'react';
import axios from 'axios';
import AccountBalance from './AccountBalance';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Debits extends Component {
    
    constructor(props){
        super(props);

        this.descRef = React.createRef();
        this.amountRef = React.createRef();
        this.dateRef = React.createRef();
        
        this.state = {
            loadedDebits: this.props.currentDebitsDesc,
            amountBalance: this.props.accountBalance
        }

    }

    componentDidMount() {

        
        if(this.props.currentDebitsDesc.length == 0) {
        axios.get(`https://moj-api.herokuapp.com/Debits`)
        .then(pageRes => {
            this.setState({loadedDebits: pageRes.data})

        });
    }
}

//builds transaction history from API (to be loaded into render)
buildDefaultTransactionHistory = () => {

return (

    <div id = "transactionLayout">
    

    <table id = "transactionTable">
    <tr>
        <th>Amount:</th>
        <th>Description:</th>
        <th>Time:</th>
    </tr>

    {this.state.loadedDebits.map(transAct => <tr key = {transAct.id}>
    <td>${transAct.amount}</td>
    <td>{transAct.description}</td>
    <td>  {transAct.date.substring(5,7)}/{transAct.date.substring(8,10)}/{transAct.date.substring(0,4)} at {transAct.date.substring(11,19)} </td>
        {console.log(this.state.loadedDebits)}
    </tr>)}
    </table>


    </div>
)


}

refreshValue = (amount) => {
    this.setState({amountBalance: this.state.amountBalance - amount})
    this.props.removeDebit(amount, this.state.loadedDebits);
}
    



  render() {
    var newDate = new Date();

    return (
        <div className = "debits">
            <center>
            <h1>Your Debits</h1>

            <div style = {{marginBottom: '30px'}}>
            <Link exact id = "refLink" to="/">Home</Link>
          <Link id = "refLink" to="/LogIn">Log In</Link>
          <Link id = "refLink" to="/UserProfile">My Profile</Link>
          <Link id = "refLink" to={"/Credits"}>View Credits</Link>
          <Link id = "refLink" to="/Debits">View Debits</Link>
          </div>
            </center>
            {this.buildDefaultTransactionHistory()}

            Description:
            <input ref = {this.descRef}/>

            Amount:
            <input ref = {this.amountRef}/>

            Date:
            <input ref = {this.dateRef} type = "date"/>

            <button onClick = {() => {
                    if(this.descRef.current.value.length > 0 && this.dateRef.current.value.length > 0 && this.amountRef.current.value.length > 0 && parseInt(Number(this.amountRef.current.value)) == this.amountRef.current.value) {
                    let newEntry = this.state.loadedDebits;
                    let amount = this.amountRef.current.value;
                    newEntry.push({
                        id: Math.random(),
                        description: this.descRef.current.value,
                        amount: amount,
                        date: this.dateRef.current.value + "T"+newDate.getHours()+":"+newDate.getUTCMinutes()+":"+newDate.getUTCSeconds()
                    });
                    this.setState({loadedDebits: newEntry})
                    this.refreshValue(amount)
                }
                }}>Submit Transaction</button>

            <AccountBalance accountBalance={this.state.amountBalance}/>
        </div>
    );
  }
}

export default Debits;