import './App.css';
import {useState} from 'react'
import BoxForm from './Components/BoxForm';
import BoxConatainer from './Components/BoxesContainer'

function App() {
  const [boxList, setBoxList]= useState([]);

  const addBox = (newBox) => {
  setBoxList([
    ...boxList, 
    newBox])
  }
  return (
    <div className="App">
      <BoxForm addBox={addBox}/>
      <BoxConatainer boxList={boxList}/>
    </div>
  );
}

export default App;
