import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import AddTaskForm from './Components/AddTaskForm';
import DisplayList from './Components/DisplayList';


function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask =(newTask) =>{
    setToDoList([
      ...toDoList, 
      newTask
    ]);
  }

  const updateTask = (index) =>{
    console.log("Update List in App.js:", index)
    const updatedList=[
      ...toDoList
    ]
    updatedList[index].isComplete ? updatedList[index].isComplete=false :updatedList[index].isComplete=true 
    setToDoList(updatedList)
  }

  const deleteTask = (index) =>{
    const updatedList=toDoList.filter((task,i) => i != index)
    setToDoList(updatedList)
  }
  return (
    <div className="App">
      <AddTaskForm addTask={addTask}/>
      <DisplayList toDoList={toDoList} updateTask={updateTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
