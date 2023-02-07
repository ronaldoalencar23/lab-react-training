import { useState } from 'react';
export function LikeButton(props) {
  const [counter, setCounter] = useState(0);
  const [counters, setCounters] = useState(0);

  function add() {
    setCounter(counter + 1);
  }

  function adds() {
    setCounters(counters + 1);
  }

  return (
    <div className="App">
      <button onClick={add}>{counter} likes</button>
      <button onClick={adds}>{counters} likes</button>
    </div>
  );
}
