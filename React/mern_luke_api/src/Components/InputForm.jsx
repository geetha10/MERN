import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

function InputForm() {

    const [resource, setResource] = useState("people");
    const [id, setId] = useState("1");
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/${resource}/${id}`);
    }

    return (
        <form className="inputForm" onSubmit={submitHandler}>
            <div className="formFeild">
                <h4 className='text-nowrap m-0'>Search for: </h4>
                <select onChange={(e) => setResource(e.target.value)} className='form-control' value={resource}>
                    <option value="">---</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
            </div>
            <div className="formFeild">
                <h4 className='m-0'>ID: </h4>
                <input type="number" onChange={(e) => setId(e.target.value)} className='form-control' value={id}/>
                <input className="formButton" type="submit" value="Search" />
            </div>
        </form>
    )

}

export default InputForm