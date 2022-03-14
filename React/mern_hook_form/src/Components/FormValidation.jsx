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
                <input type="text" name="username" value={initialState.username.value} />
                {initialState.username.error !== null && (
                    <p className="error">{initialState.username.error}</p>
                )}
            </div>
        </form>
    </div>
    )
}

export default FormValidation