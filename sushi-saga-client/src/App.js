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
      display: [],
      eaten: [],
      cash: 100
    }
  }

  componentDidMount(){
    fetch(API)
      .then((res)=>{return res.json()})
      .then(data => {
        let sushis = data.map((sushi) => {return {...sushi, eaten: false}})
        this.setState({
          sushis: sushis,
          display: sushis.slice(0,4)
        })
      })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.display} eatSushi={this.eatSushi} getMoreSushi={this.getMoreSushi}/>
        <Table eaten={this.state.eaten} money={this.state.cash}/>
      </div>
    );
  }

  eatSushi = (e) => {
    let eating = this.state.sushis.find((sushi)=>{return e.target.id == sushi.id})
    if (eating !== undefined && eating.price <= this.state.cash){
      let sushis = this.state.sushis.map((sushi)=>{return eating.id == sushi.id ? {...sushi, eaten: true} : sushi })
      let eaten = sushis.filter((sushi)=>{return sushi.eaten})
      let display = this.state.display.map((sushi)=>{return eating.id == sushi.id ? {...sushi, eaten: true} : sushi })
      this.setState({
        sushis: sushis,
        eaten: eaten,
        cash: this.state.cash - eating.price,
        display: display
      })
    }
  }

  getMoreSushi = (e) => {
    this.setState({
      display: this.randomSushis(this.state.sushis.filter((sushi)=> {return sushi.eaten === false}))
    })
  }

  randomSushis = (sushis) => {
    let newSushis = []
    for (var i=0; i<4; i++) {
      let s = sushis[Math.floor(Math.random() * sushis.length)]
      sushis = sushis.filter((sushi)=>{return sushi !== s})
      newSushis.push(s)
    }
    return newSushis
  }

}

export default App;
