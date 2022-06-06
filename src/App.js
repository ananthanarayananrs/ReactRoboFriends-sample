// import logo from './logo.svg';
import './App.css';
// import Card from './Card'
import 'tachyons'
import {robots} from './robots'
import CardList from './CardList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardList robots= {robots}/>
      </header>
    </div>
  );
}

export default App;
