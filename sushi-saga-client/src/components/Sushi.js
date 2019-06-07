import React, { Fragment } from 'react'

const Sushi = (props) => {
  // console.log(props.eatenSushis)
  // console.log(props.eatenSushis.includes(props.sushi))
  return (
    <div className="sushi">
      <div className="plate" id={props.sushi.id} value='notEaten' onClick={() => props.eatSushi(props.sushi.id)}>
        {props.eatenSushis.includes(props.sushi)/* Tell me if this sushi has been eaten! */ 
        ?null
        :<img src={props.sushi.img_url/* Give me an image source! */} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name/* Give me a name! */} - ${props.sushi.price/* Give me a price! */}
      </h4>
    </div>
  )
}

export default Sushi