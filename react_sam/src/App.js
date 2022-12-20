import { useState } from 'react';

function App() {
  const [like, setLike] = useState(0);
  const [value, setValue] = useState('');

  function increment() {
    setLike(like + 1);
  }
  function decrement() {
    setLike(like - 1);
  }

  return (
    <div className="App">
      <h1>{like} </h1>
      <h1>{value} </h1>
      <input type="inputs" onChange={(e) => setValue(e.target.value)} />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
