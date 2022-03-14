import React, {useState} from 'react'
import './BoxForm.css'

function BoxForm(props) {

    const [color, setColor]=useState("")
    const [size, setSize]=useState("")

    const handleSubmit =(e) =>{
        e.preventDefault();
        const newBox={
            color:color,
            size:size

        }
        setColor("");
        setSize("")
        props.addBox(newBox)
    }
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <label>Color</label>
                    <input type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)}/>
                </div>
                <div>
                    <label>Size</label>
                    <input type="text" name="color" value={size} onChange={(e) => setSize(e.target.value)}/>
                </div>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default BoxForm