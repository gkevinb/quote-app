import { useState } from 'react'
import './App.css';
import quotes from './quotes'

function App() {
  const [count, ] = useState(Math.floor(Math.random() * quotes.length))

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {quotes[count].text}
        </p>
        <p>
          {quotes[count].author}
        </p>
      </header>
    </div>
  );
}

export default App;
