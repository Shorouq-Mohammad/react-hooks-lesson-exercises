import React, {useState} from 'react'

export default function SpotCheck1() {
  // your code here
  const [counter, setCounter] = useState(0)
  
  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        <p>the counter is {counter}</p>
        <button onClick={()=> setCounter(counter -1)} >Decrease</button>
        <button onClick={()=> setCounter(counter +1)}>Increase</button>
      </div>
    </div>
  )
}