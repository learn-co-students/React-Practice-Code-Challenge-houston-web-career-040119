import React from 'react' 

const AddMoney = (props) => {
    return(

        <React.Fragment>
            <button onClick={props.toggleAddMoneyForm}>Add Money</button>
            {props.showAddMoneyForm ? 
            <form onSubmit={props.handleAddMoney}>
                <input type='number' placeholder='Insert amount'/>
                <input type='submit' value='Add'/>
            </form> 
            : null}
        </React.Fragment>
    )
}

export default AddMoney