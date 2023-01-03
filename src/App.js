import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  function fetchInfo() {}

  return (
    <main className='app'>
      <button onClick={fetchInfo}>Fetch info from Api</button>
      <div>Result : {result}</div>
    </main>
  );
}

export default App;
