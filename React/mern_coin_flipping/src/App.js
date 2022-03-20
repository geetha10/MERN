import logo from './logo.svg';
import './App.css';

function App() {
  function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }
  function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}
console.log( fiveHeadsSync() );
console.log( "This is run after the fiveHeadsSync function completes" );
  return (
    <div className="App">
      <h1>Flipping Coin Assignment</h1>
      <p>{fiveHeadsSync()}</p>
    </div>
  );
}

export default App;
