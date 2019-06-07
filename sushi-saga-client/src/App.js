import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

const startingMoney = 100;

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      start: 0,
      addedMonies: 0
    };
  }

  moneyLeft = () => {
    let num = startingMoney + this.state.addedMonies;
    this.state.data.map(
      sushi => {
        if(sushi.eaten) {
          num -= sushi.price
        }
      }
    );

    return num;
  }

  handleSushiClick = (id) => {
    let sushis = this.state.data;
    let sushi = sushis.find( sushi => { return sushi.id === id } );
    if(!sushi.eaten && (this.moneyLeft() >= sushi.price)) {
      sushi.eaten = true;
      this.setState(
        { data: sushis }
      );
    }
  }

  handleMoreButtonClick = () => {
    this.setState(
      {
        start: (this.state.start+4)%this.state.data.length
      }
    );
  }

  componentDidMount() {
    fetch(API)
    .then( res => res.json() )
    .then( data => {
      this.setState(
        {
          data: data
        }
      )
    } );
  }

  addMonies = (event) => {
    event.preventDefault();
    this.setState(
      {
        addedMonies: this.state.addedMonies+parseInt(event.target.querySelector("input").value)
      }
    )
    event.target.reset();
  }

  render() {
    return (
      <div className="app">
        <SushiContainer handleMoreButtonClick={this.handleMoreButtonClick} handleSushiClick={this.handleSushiClick} data={this.state.data} start={this.state.start} />
        <Table moneyLeft={this.moneyLeft()} addMonies={this.addMonies} sushis={this.state.data} />
      </div>
    );
  }
}

export default App;