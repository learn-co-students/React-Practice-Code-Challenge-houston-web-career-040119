import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.displaySushis.map(sushi=><Sushi sushi={sushi} eatSushi={props.eatSushi}/>)
        }
        <MoreButton getSushis={props.getSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer