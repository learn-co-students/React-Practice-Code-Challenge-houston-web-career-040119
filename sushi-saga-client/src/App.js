import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      displaySushis:[],
      index1:4,
      index2:8,
      moneyLeft: 50,
      eatenSushis: []
    }
  }

  moreSushis = () => {
    if(this.state.index1+4 <= 100) {
      this.setState({
        index1: this.state.index1+4,
        index2: this.state.index2+4,
        displaySushis: this.state.sushis.slice(this.state.index1, this.state.index2)
      })
    } else {
      this.setState({
        index1: 4,
        index2: 8,
        displaySushis: this.state.sushis.slice(0, 4)
      })
    }
  }

  eatSushi = (id) => {
    let sushi = this.state.sushis.find(sushi => sushi.id === id)
    let newSushis = this.state.eatenSushis
    if(!newSushis.includes(sushi) && this.state.moneyLeft >= sushi.price) {
      newSushis.push(sushi)
      this.setState({
        eatenSushis: newSushis,
        moneyLeft:this.state.moneyLeft-sushi.price
      })
    }
  }

  addCredits = (e) => {
    e.preventDefault()
    this.setState({
      moneyLeft: this.state.moneyLeft+parseInt(e.target[0].value)
    })
    e.target.reset()   
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  displaySushis={this.state.displaySushis} moreSushis={this.moreSushis} eatSushi={this.eatSushi} eatenSushis={this.state.eatenSushis}/>
        <Table addCredits={this.addCredits} moneyLeft={this.state.moneyLeft} eatenSushis={this.state.eatenSushis}/>
      </div>
    );
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushis: data,
        displaySushis: data.slice(0,4)
      })
    })
  }
}

export default App;