//
// made by fixedOtter on 23.8.2022
//

import { useEffect, useState } from 'react';
import './body.css';

export default function Body () {
  let [numClicks, setClicks] = useState(0);
  let [inputValue, setInputValue] = useState('');


  const handleForm = event => {
    event.preventDefault();
  }

  const handleInput = event => {
    setInputValue(event.target.value);
  }




  return (
    <main>
      <h1></h1>
      <h2>{numClicks}</h2>


      <button onClick={() => {
        setClicks(numClicks + 1);
      }}>add?</button>
      <button onClick={() => {
        setClicks(numClicks - 1);
      }}>delete!</button>

      <h3>{inputValue}</h3>

      <form>
        <input onChange={handleInput} value={inputValue} type="text" placeholder='type things' />
        <button onClick={handleForm}>this is my button</button>
      </form>

    </main>
  )
}