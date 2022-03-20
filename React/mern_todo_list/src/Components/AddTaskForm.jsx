import React, {useState} from 'react'
import './AddTaskForm.css'

function AddTaskForm(props) {

    const [task,setTask] =useState("");

    const handleSubmit=(e) =>{
        e.preventDefault();
        const newTask={
            taskDetails:task,
            isComplete:false
        }
        setTask("");
        props.addTask(newTask);
    }

    return (
        <div>
            <form className="addTaskForm" onSubmit={handleSubmit}>
                <div>
                    <label>Task Details</label>
                    <input type="text" 
                    value={task} 
                    name="task" 
                    onChange={(e) => setTask(e.target.value)}/>
                    <button type="submit">Add To List</button>
                </div>
            </form>
        </div>
    )
}

export default AddTaskForm