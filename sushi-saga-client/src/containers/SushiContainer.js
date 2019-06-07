import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        { props.data.map( sushi => <Sushi sushi={sushi} handleSushiClick={props.handleSushiClick} /> ).slice(props.start,Math.min(props.data.length,props.start+4)) }
        <MoreButton handleMoreButtonClick={props.handleMoreButtonClick}  />
      </div>
    </Fragment>
  )
}

export default SushiContainer