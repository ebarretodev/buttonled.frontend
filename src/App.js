import './App.css';
import Led from './components/led';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicação SENAI</h1> <br />
        <h2>Simulador de Defeitos em Nuvem</h2> <br />
        <div className='leds'>
          <Led name="D1" />
          <Led name="D2" />
          <Led name="D3" />
          <Led name="D4" />
          <Led name="D5" />
          <Led name="D6" />
        </div>
        
      </header>
    </div>
  );
}

export default App;
