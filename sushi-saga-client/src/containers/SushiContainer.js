import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import AddMoney from '../components/AddMoney'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map(sushi => <Sushi sushi={sushi} eatSushi={props.eatSushi}/>)}
        <MoreButton getMore={props.getMore} />
        <AddMoney addMoney={props.addMoney} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
