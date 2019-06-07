import React from 'react'

const SushiWallet = (props) => {
    return(
        <form onSubmit={props.addCredits}>
            <input type='number' placeholder='Add Credits'/>
            <input type='submit' value='Add Credit(s)'/>
        </form>
    )
}

export default SushiWallet