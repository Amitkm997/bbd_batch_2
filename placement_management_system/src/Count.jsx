

import React from 'react'
import { useState } from 'react'
export default function Count() {
    // const[initialStateValue,setUpFuntion]=useState(initialValue)
    const[count,setCount]=useState(0);
    console.log(count)
  return (
    <>
      <h1>Counter App</h1>
      <h3>Count:{count}</h3>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>

    </>
  )
}
