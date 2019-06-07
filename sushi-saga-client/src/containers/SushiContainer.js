import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.displaySushis.map((sushi,idx) => <Sushi key ={idx} sushi={sushi} eatSushi={props.eatSushi} eatenSushis={props.eatenSushis}/>)
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton moreSushis={props.moreSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer