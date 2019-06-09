import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
//import _ from 'lodash'
// Endpoint!
const API = "http://localhost:3000/sushis"
let sushis = []

class App extends Component {

  constructor(props) {
    
    super(props)
    this.state = {
      displaySushis: [],
      emptyPlates: [],
      balance: 100
    }


  }

  

  buySushi = (sushi) => {

    if (this.state.emptyPlates.includes(sushi.id) || sushi.price > this.state.balance) {
      return }
    let displaySushis = this.state.displaySushis.map(obj => {
      if (obj.id === sushi.id) {
        obj.eaten = true  
      }
      return obj })
    
     
        this.setState({
          displaySushis,
          emptyPlates: this.state.emptyPlates.concat(sushi.id),
          balance: this.state.balance - sushi.price
        })
  }

  populateSushis = () => {
    
    this.setState({
      displaySushis: sushis.splice(0, 4)
    })
  
  }

  // deductBalance = (sushi) => {
  //   if (this.state.emptyPlates.includes(sushi.id)) {
  //     return }
  // }



  componentDidMount() {
    
    fetch(API)
    .then(res => res.json())
    .then(obj => {
      sushis = obj.map(sushi => {
        return {...sushi, eaten: false}
      })
      
      this.populateSushis()
    })
  }

  render() {
    
    return (
      <div className="app">
        <SushiContainer sushis={this.state.displaySushis} onBuySushi={this.buySushi} onPopulateSushis={this.populateSushis}/>
        <Table emptyPlates={this.state.emptyPlates} balance={this.state.balance}/>
      </div>
    );
  }
}

export default App;