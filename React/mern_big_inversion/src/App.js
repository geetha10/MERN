import './App.css';
import PersonCard from './Components/PersonCard';
function App() {

  return (
    <div className="App">
      <PersonCard person={{firstName:"John",lastName:"Smith",age: 8,hairColor:"Brown"}} /> 
      <PersonCard person={{firstName:"Geetha",lastName:"Medisetty",age: 8,hairColor:"Brown"}} /> 
      <PersonCard person={{firstName:"Murali",lastName:"Medisetty",age: 8,hairColor:"Brown"}} /> 
      <PersonCard person={{firstName:"Vamshi",lastName:"Medisetty",age: 8,hairColor:"Brown"}} /> 
    </div>
  );
}

export default App;
