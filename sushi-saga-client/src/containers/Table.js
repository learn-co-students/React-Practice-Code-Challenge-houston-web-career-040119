import React, { Fragment } from 'react'

const Table = (props) => {
  console.log(props.eatenSushi.length)
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.dollars} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {props.eatenSushi.length > 0 ? renderPlates(props.eatenSushi) : null}
        </div>
      </div>
    </Fragment>
  )
}

export default Table
