import { Button } from 'bootstrap'
import React from 'react'
import './DisplayList.css'

function DisplayList(props) {
    //const todoList=props.toDoList;
   // console.log("Before updating:",todoList)
const stirkeThruStyle={textDecoration:"line-through"}
    const handleComplete = (i)=>{
        props.updateTask(i)
    }

    const handleDelete = (i)=>{
        props.deleteTask(i)
    }
    
    return (
        <div>
            <p>{JSON.stringify(props)}</p>
            <div>
                {
                    props.toDoList.map((task,i) =>{
                        return(
                            <div key={i}>
                                {task.isComplete ?
                                <div className='completedTask'>
                                    <input type="checkbox" checked={task.isComplete} onChange={()=>handleComplete(i)}/>
                                    <label >{task.taskDetails}</label>
                                    <button onClick={() => handleDelete(i)}>Delete</button>
                                </div>:
                                <div className='task'>
                                    <input type="checkbox" checked={task.isComplete} onChange={()=>handleComplete(i)}/>
                                    <label>{task.taskDetails}</label>
                                    <button onClick={() => handleDelete(i)}>Delete</button>
                                </div>

                                }
                            </div> 
                            
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DisplayList

{/* <div key={i} >
    <input type="checkbox" checked={task.isComplete} onChange={()=>handleComplete(i)}/>
    <label>{task.taskDetails}</label>
    <button onClick={() => handleDelete(i)}>Delete</button>
</div> */}