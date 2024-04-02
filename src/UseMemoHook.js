import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [someBool, setSomeBool] = useState(false)
    const [amount, setAmount] = useState(1000)

    console.log('re-render')

    const expFunction = () => {
        console.log('exp funciton executed')
        const data = []
        for(let i=0; i<=amount; i++){
            if(i%2===0){
                console.log(i)
                data.push(i)
            }
        }
        return data
    }

    const calaculatedData = useMemo(() => expFunction(), [amount]) 

  return (
    <div>
        <h2>UseMemoHook</h2>
        <div>CurrentValue: {someBool?'true':'false'}</div>
        <button onClick={()=>{setSomeBool(prevState => !prevState)}}>Change</button>
        <button onClick={()=>{setAmount(amount+100)}}>Data</button>
        {calaculatedData && calaculatedData.map((ele) => {
            return <p>{ele}</p>
        })}
    </div>
  )
}

export default UseMemoHook