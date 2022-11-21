import logo from './logo.svg';
import './App.css';
import CrudApp from './components/CrudApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Demo Crud</h2>
      </header>
      <div className='main__container'>

        <CrudApp/>
        
      </div>
    </div>
  );
}

export default App;
