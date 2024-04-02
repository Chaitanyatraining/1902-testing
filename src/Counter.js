import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1)

  return (
    <div>
        <h2>Count</h2>
        <p data-testid='counter'>Count:{count}</p>
        <button data-testid='increment' onClick={()=>{setCount(count + 1)}}>Increment</button>
        <button data-testid='decrement' onClick={()=>{setCount(count - 1)}}>Decrement</button>
    </div>
  )
}

export default Counter