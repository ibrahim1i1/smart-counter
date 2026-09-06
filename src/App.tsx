import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  
  const handleIncrement = () => {
    setCount(prev => prev + step);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className='container'>
      <h2>smart counter</h2>
      <div className='count-display'>{count}</div>
      <div className='btn-group'>
        <button onClick={handleIncrement}>+{step}</button>
        <button onClick={handleDecrement} disabled={count <= 0} >-{step}</button>
        <button className='reset-btn' onClick={handleReset}>Reset</button>
      </div>
      <div step-control>
        <label>مقدار الخطوة: </label>
        <input type="number"
        min='1'
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default App
