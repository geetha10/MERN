import './App.css';
import FetchDetails from './Components/FetchDetails';

import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import InputForm from './Components/InputForm';


function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <h1>Luke API Assignment</h1>

        <InputForm />
        <Switch>
          <Route path="/:resource/:id">
            <FetchDetails />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
