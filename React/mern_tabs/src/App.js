import logo from './logo.svg';
import './App.css';
import RenderTabs from './Components/RenderTabs';

function App() {
  const tabsList=[
    {name:"Tab1", contents:"Tab1 Constents"},
    {name:"Tab2",contents:"Tab1 Constents"},
    {name:"Tab2",contents:"Tab1 Constents"}]

  return (
    <div className="App">
      <RenderTabs tabsList={tabsList}/>
    </div>
  );
}

export default App;
