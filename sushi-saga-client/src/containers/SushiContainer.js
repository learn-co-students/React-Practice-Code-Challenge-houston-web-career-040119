import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import AddMoney from '../components/AddMoney'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        { props.sushis.map(sushi => <Sushi key={sushi.id} {...sushi} eatenPlates={props.eatenPlates} handleEatSushi={props.handleEatSushi}/>) }
        <MoreButton handleMoreSushi={props.handleMoreSushi}/>
        <AddMoney handleAddMoney={props.handleAddMoney} showAddMoneyForm={props.showAddMoneyForm} toggleAddMoneyForm={props.toggleAddMoneyForm}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer