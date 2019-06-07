import React, { Fragment } from 'react'
import SushiWallet from './SushiWallet'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.moneyLeft} remaining!
        <SushiWallet addCredits={props.addCredits}/>
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.eatenSushis)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table