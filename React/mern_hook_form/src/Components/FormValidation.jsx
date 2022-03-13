import React, {useReducer} from 'react'

const initialState = {
    username: {
        value: '',
        error: null
    },
    password: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action){
    return{
        ...state,
        [action.type]:action.payload
    };
}

function FormValidation() {

    return (
    <div>
        <h1>Form Validation Assignment</h1>
        <form>
            <div>
                <label>UserName</label>
                <input type="text" name="username" value={user.username} />
                {
                    st
                }
            </div>
        </form>
    </div>
    )
}

export default FormValidation