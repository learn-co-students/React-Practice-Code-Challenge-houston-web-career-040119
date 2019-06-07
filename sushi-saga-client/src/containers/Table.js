import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <div className="remaining">
      <h1>
        You have: ${props.moneyLeft} remaining!
      </h1>
    <form onSubmit={props.addMonies}>
        <h2>Add to balance: $<input type={"number"} defaultValue={"0"} min={"0"} step={"1"} style={{fontSize:"15pt"}} />
         <input style={{fontSize:"15pt"}} type="submit" value="Add" /></h2>
      </form>
      </div>
      <div className="table">
          
        <div className="stack">
          {
            renderPlates(props.sushis.filter(sushi => sushi.eaten))
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table