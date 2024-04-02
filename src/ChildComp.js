import React from 'react'

const ChildComp = ({handler}) => {
    console.log('child component executed')
  return (
    <div>
        <h2>Child Comp</h2>
        <button onClick={handler}>Child</button>
    </div>
  )
}

export default React.memo(ChildComp)