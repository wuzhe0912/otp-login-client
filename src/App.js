import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  async function fetchInfo() {
    const url = `${process.env.REACT_APP_API_URL}/test`;
    const response = await fetch(url);
    const data = await response.json();
    setResult(data);
  }

  return (
    <main className='app'>
      <button onClick={fetchInfo}>Fetch info from Api</button>
      <div>Result : {result}</div>
    </main>
  );
}

export default App;
