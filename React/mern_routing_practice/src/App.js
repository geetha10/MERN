import './App.css';

import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";


const Home = (props) => {
  return (
    <div>
      <h1>Home component!</h1>
      <p>Welcome...!</p>
    </div>
  );
}

const MessageRoute = (props) => {
  const { message } = useParams();
  return (
    <div>
      <h1>MessageRoute Route component!</h1>
      <p>{isNaN(message) ? `The word is: ${message}` : `The number is: ${message}`} </p>
    </div>
  )
}

const MessageRouteWithStyle = (props) => {
  const { message, textColor, background } = useParams();
  console.log(message);
  console.log(textColor);
  console.log(background);
  const messageStyle = {
    color: textColor ? textColor : "black",
    backgroundColor: background ? background : "white"
  }
  return (
    <div>
      <h1>MessageRouteWithStyle Route component!</h1>
      <p style={messageStyle}>{isNaN(message) ? `The word is: ${message}` : `The number is: ${message}`} </p>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/:message">
          <MessageRoute />
        </Route>
        <Route path="/:message/:textColor/:background">
          <MessageRouteWithStyle />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;