import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushi: [],
      money: 100,
      displaySushis: [],
      index: 0
    }
  }
  eat = (hit) => {
    console.log(hit)
    if(this.state.money >= hit.price){
      // debugger
      let arr = this.state.sushi.map(sushi => {return sushi.id === hit.id ? {...sushi, eaten: true } : {...sushi, eaten: false} } )
      hit.eaten = true
    this.setState({
      money: this.state.money - hit.price,
      sushi: arr
      // img_url: null
    })
    }
    else{console.log("NO FREELOADERS!!!")}
  }


  getSushis = () => {
    this.setState({
      displaySushis: this.state.sushi.slice(this.state.index, this.state.index+4),
      index: this.state.index+4
    })
  }



  render() {
    // debugger

    return (
      <div className="app">
        <SushiContainer sushi={this.state.displaySushis} eat={this.eat} balance={this.state.money} getSushis={this.getSushis} />
        <br/>
        <Table money={this.state.money}/>
      </div>
    );
  }

  componentDidMount=()=>{
    fetch(API)
    .then((data) => {return data.json()})
    .then(sushis => {
      let arr = sushis.map(obj => {return {...obj, eaten: false}})
      // console.log(arr)
      // debugger
      this.setState({
        sushi: arr,
        displaySushis: arr.slice(0, 4),
        index: 4
      })
      // console.log("fetch?",this.state)

    })
    // .then(console.log(this.state))
    // debugger
  }
}

export default App;