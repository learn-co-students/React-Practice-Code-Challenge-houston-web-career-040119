import React, { Component } from 'react'

class Sushi extends Component{

  constructor(props){
    super(props)
    this.state = {
      eaten: false
    }
  }

  eatSushi = () => {
    if(this.props.balance >= this.props.sushi.price && !this.props.sushi.eaten){
    this.props.eat(this.props.sushi)
    // this.setState({eaten: true})
    }else{console.log("NO FREELOADERS!!!")}
    // this.props.eat
    // debugger
  }
  render(){
    // debugger
  return (
    <div className="sushi">
      <div className="plate" onClick={this.eatSushi}>
        {this.props.sushi.eaten ? null : <img src={this.props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )
}
}
export default Sushi