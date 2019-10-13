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
   displaySushis: [],
   moneyLeft: 100,
   isLoaded: false
  }
}

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
    sushis: data,
    isLoaded: true,
    fourSushis: data.splice(0,4)
      })
   })
  }

  moreSushis = (e) => {
    console.log("more sushis")
    this.setState({
      fourSushis: this.state.sushis.splice(0,4)
    })
   
  }

  eatSushi = (e) => {

    console.log("eat sushi",e.target)
   
  }
  
  render() {
    console.log(this.state.sushis)

    return (
      <div >
        {this.state.isLoaded===true? 
        //true
        <SushiContainer sushicontainer={this.state.fourSushis} moreSushis={this.moreSushis} eatSushi={this.eatSushi} />
    :null
        //false
        }
        {/* {displaySushis} */}
        
        <Table sushis />
      </div>
    );
  }
    
  







}
export default App;






  


