import React, { useCallback, useState } from 'react'
import ChildComp from './ChildComp'

const ParentComp = () => {
    const [count, setCount] = useState(0)

    console.log('parent Comp re-rendered')

    const handleCallBack = useCallback(() =>{
        console.log('function executed')
    }, [])

  return (
    <div>
        <h2>ParentComp</h2>
        <ChildComp handler={handleCallBack} />
        <button onClick={()=>{setCount(count + 1)}}>increment: {count}</button>
    </div>
  )
}

export default ParentComp