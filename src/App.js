import './App.css';
import { db } from './utils/firebase';
import { onValue, ref, set } from 'firebase/database';
import { useEffect, useState } from 'react';

function App() {
  const [ledStatus, setLedStatus] = useState(false);

  useEffect(() => {
    const starCountRef = ref(db, 'esp32/Led');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      setLedStatus(data)
    });
  }, [])

  const trocaLed = () =>{
    set(ref(db, 'esp32'), {
      Led: !ledStatus,
    }).then(()=>{
      console.log('Ok')
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        Olá <br />
        <div className='circle' style={{ backgroundColor: ledStatus ? "green" : "red" }}></div>
        <button onClick={trocaLed}>{!ledStatus ? "Acende" : "Apaga"} Led</button>
      </header>
    </div>
  );
}

export default App;
