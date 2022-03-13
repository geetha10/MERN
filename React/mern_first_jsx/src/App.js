import './App.css';
import FirstComponentHeading from './components/FirstComponent'
import ListComponent from './components/ListComponent'

function App() {

  const toDoList=["Learn React","Climb Mt.Everest","Run a marathon","Feed the dogs"]
  
  return (
    <fieldset>
      <legend>FirstComponent.jsx</legend>
      <FirstComponentHeading/>
      <ListComponent
        toDoList={toDoList}
      />
    </fieldset>
  );
}

export default App;
