import './App.css';
import MessageForm from './Components/MessageForm';
import MessageDisplay from './Components/MessageDisplay';
import { useState } from 'react';

function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");

  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( newMessage );
  }

  return ( 
  <div className="App">
    <fieldset>
      <legend>App Component</legend>
      <div className="App">
        <MessageForm onNewMessage={youveGotMail}/>
        <MessageDisplay message={currentMsg}/>
      </div>
    </fieldset>
    </div>
  );
}

export default App;
