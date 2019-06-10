import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

export default class SushiContainer extends Component {

  constructor(){
    super()
    this.state = {
      sushiArr: []
    }
  }

  // selectFish = () => {
  //   let arr
  //   arr = this.state.sushiArr
  //   let offerings = arr.splice(0, 3)
  //   this.setState({
  //     sushiArr: offerings
  //   })
  // }


  render(){
    
    console.log(this.props)
    // debugger

  return (
      <div className="belt">
        {/* <button onClick={this.props.eat}>Test</button> */}
        {this.props.sushi.map(sushi => this.state.sushiArr.push(sushi))}
        {/* {this.state.sushiArr.splice(0, 3)} */}
        {this.props.sushi.map(sushi =>  <Sushi sushi={sushi} eat={this.props.eat} balance={this.props.balance}/>)}
        <MoreButton more={this.props.getSushis}/>
      </div>

  )
}

}