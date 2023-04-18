import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function App() {

  const numbers = [1, 5, 10, 20, 50, 70, 100]

  const selector = useSelector(s => s.count)
  const dispatch = useDispatch()
  const [numberId, setId] = useState(0)
  const [value, setValue] = useState()


  return (
    <div className="app">
      <h1 className='title'>Counter</h1>
      <div className="number__box">
        <h1>{selector}</h1>
      </div>
      <div className="count__buttons">
        <button onClick={() => dispatch({ type: "RESET", payload: value })}>Reset</button>
        <button onClick={() => dispatch({ type: "INC", payload: value })}>Count</button>
      </div>
      <div className="number__active__buttons">
        {
          numbers.map((i, id) => <button className='btn' style={id === numberId ? { background: "green" } : {}}
            onClick={() => {
              setId(id);
              setValue(i)
            }} key={id}>
            <p>{i}</p>
          </button>)
        }
      </div>
    </div>
  );
}

export default App;
