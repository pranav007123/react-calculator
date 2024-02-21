
import { useState } from 'react'
import './App.css'





function App() {
  
  const [input, setInput] = useState('');

  
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'AC') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };
  return (
    <div className="calculator bg-info mt-5 p-2 ">
    <input
      type="text"
      className=" form-control display "
      value={input}
      onChange={(e) => setInput(e.target.value)}
      
    />
    <div className="buttons">
      <button onClick={() => handleButtonClick('7')} className='btn btn-light m-1'>7</button>
      <button onClick={() => handleButtonClick('8')} className='btn btn-light m-1' >8</button>
      <button onClick={() => handleButtonClick('9')} className='btn btn-light m-1'>9</button>
      <button onClick={() => handleButtonClick('/')} className='btn btn-primary m-1'>/</button>
    </div>
    <div className="buttons">
      <button onClick={() => handleButtonClick('4')} className='btn btn-light m-1'>4</button>
      <button onClick={() => handleButtonClick('5')} className='btn btn-light m-1'>5</button>
      <button onClick={() => handleButtonClick('6')} className='btn btn-light m-1'>6</button>
      <button onClick={() => handleButtonClick('*')} className='btn btn-primary m-1'>*</button>
    </div>
    <div className="buttons">
      <button onClick={() => handleButtonClick('1')}className='btn btn-light m-1'>1</button>
      <button onClick={() => handleButtonClick('2')}className='btn btn-light m-1'>2</button>
      <button onClick={() => handleButtonClick('3')}className='btn btn-light m-1'>3</button>
      <button onClick={() => handleButtonClick('-')}className='btn btn-primary m-1'>-</button>
    </div>
    <div className="buttons">
      <button onClick={() => handleButtonClick('0')}className='btn btn-light m-1'>0</button>
      <button onClick={() => handleButtonClick('.')} className='btn btn-light m-1'>.</button>
      <button onClick={() => handleButtonClick('C')}className='btn btn-danger m-1'>AC</button>
      <button onClick={() => handleButtonClick('+')}className='btn btn-primary m-1'>+</button>
    </div>
    <div className="buttons">
      <button onClick={() => handleButtonClick('=')}className='btn btn-light m-1'>=</button>
    </div>
    
  </div>
);
};


export default App
