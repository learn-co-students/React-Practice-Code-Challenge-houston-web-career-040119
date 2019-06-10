import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state = {
    sushis: [],
    currentSushiId: 0,
    remainMoney: 100,
    eatenPlates: [],
    showAddMoneyForm: false
  }

  handleEatSushi = (id, price) => {
    if(!this.state.eatenPlates.includes(id) && this.state.remainMoney >= price) {
      let eatenPlates = this.state.eatenPlates
      eatenPlates.push(id)
      this.setState({
        eatenPlates: eatenPlates,
        remainMoney: this.state.remainMoney - price
      })
    }
  }

  handleAddMoney = (e) => {
    e.preventDefault()
    this.setState({remainMoney: this.state.remainMoney + parseInt(e.target[0].value)})
  }

  toggleAddMoneyForm = () => {
    this.setState({showAddMoneyForm: !this.state.showAddMoneyForm})
  }

  handleMoreSushi = () => {
    if((this.state.currentSushiId + 4) > (this.state.sushis.length - 1)) {
      this.setState({currentSushiId: 0})
    } else {
      this.setState({currentSushiId: this.state.currentSushiId + 4})
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer handleAddMoney={this.handleAddMoney} showAddMoneyForm={this.state.showAddMoneyForm} toggleAddMoneyForm={this.toggleAddMoneyForm} eatenPlates={this.state.eatenPlates} handleEatSushi={this.handleEatSushi} handleMoreSushi={this.handleMoreSushi}  sushis={this.state.sushis.slice(this.state.currentSushiId, this.state.currentSushiId + 4)}/>
        <Table remainMoney={this.state.remainMoney} eatenPlates={this.state.eatenPlates}/>
      </div>
    );
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({sushis: data})
    })
  }
}



export default App;