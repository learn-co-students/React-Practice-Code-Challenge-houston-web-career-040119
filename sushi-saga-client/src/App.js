import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushis: [],
      displaySushis: [],
      index: 0,
      money: 100,
      emptyPlate: []

    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data =>{
      let arr = data.map(obj=> {return {...obj, eaten: false}}) 
      this.setState({
        sushis: data
      })
      this.getSushis()
    })
  }

  getSushis = () =>{
    this.setState({
      displaySushis: this.state.sushis.slice(this.state.index,this.state.index+4),
      index: this.state.index + 4
    })
  }

  eatSushi = (eatingSushi) => {
    // let eat = this.state.sushis.find(sushi => sushi.id == eatingSushi.id)
    let arr = this.state.sushis.map(sushi => {return sushi.id === eatingSushi.id ? {...sushi, eaten: true}: sushi})
    if(this.state.money >= eatingSushi.price){
      let plates = this.state.emptyPlate
      plates.push('1')
      this.setState({
        sushis: arr,
        displaySushis: arr.slice(this.state.index - 4, this.state.index),
        money: this.state.money - eatingSushi.price,
        emptyPlate: plates
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  displaySushis={this.state.displaySushis} getSushis={this.getSushis} eatSushi={this.eatSushi}/>
        <Table money={this.state.money} plates = {this.state.emptyPlate}/>
      </div>
    );
  }
}

export default App;