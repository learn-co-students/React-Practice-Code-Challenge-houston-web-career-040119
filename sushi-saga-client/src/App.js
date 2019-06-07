import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushi: [],
      eatenSushi: [],
      dollars: 100,
      index1: 0,
      index2: 4

    }
  }

componentDidMount() {
  fetch(API)
  .then(res => res.json())
  .then(obj => {
    this.setState({
      sushi: obj,
    })
  })
}

eatSushi = (eatenSushi) => {
  let newSushi = this.state.sushi.map(sushi => {if(sushi.id === eatenSushi.id) {return sushi.eaten = true}else{return sushi}})
  let newDollars = this.state.dollars - eatenSushi.price
  let eaten = this.state.eatenSushi
  eaten.push(eatenSushi)
  if(this.state.dollars >= eatenSushi.price){
  this.setState({
    sushi: newSushi,
    dollars: newDollars,
    eatenSushi: eaten
  })}
}

getMore = () => {
  let i1 = this.state.index1 + 4
  let i2 = this.state.index2 + 4
  if(i2 > 100){
    i2 = 4;
    i1 = 0
  }
  this.setState({
    index1: i1,
    index2: i2
  })
}

addMoney = () => {
    this.setState({
      dollars: 100
    })
}

  render() {

    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi.slice(this.state.index1, this.state.index2)} eatSushi={this.eatSushi} getMore={this.getMore} addMoney={this.addMoney}/>
        <Table dollars={this.state.dollars} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;
