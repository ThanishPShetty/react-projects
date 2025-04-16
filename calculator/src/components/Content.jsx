import React from 'react';
import './Content.css';

function Content({ plus, minus, mul, div, mod, num ,equal, clear}) {
  return (
    <div className='content'>
       <div className='row'>
         <button onClick={() => num('0')}>0</button>
         <button onClick={() => num('1')}>1</button>
         <button onClick={() => num('2')}>2</button>
         <button onClick={() => num('3')}>3</button>
       </div>
       <div className='row'>
         <button onClick={() => num('4')}>4</button>
         <button onClick={() => num('5')}>5</button>
         <button onClick={() => num('6')}>6</button>
         <button onClick={() => num('7')}>7</button>
       </div>
       <div className='row'>
         <button onClick={() => num('8')}>8</button>
         <button onClick={() => num('9')}>9</button>
         <button onClick={plus}>+</button>
         <button onClick={minus}>-</button>
       </div>
       <div className='row'>
         <button onClick={mul}>*</button>
         <button onClick={div}>/</button>
         <button onClick={mod}>%</button>
         <button onClick={equal}>=</button>
       </div>
       <div className='row'>
        <button onClick={clear} className='reset'>Clear</button>
       </div>
    </div>
  );
}

export default Content;
