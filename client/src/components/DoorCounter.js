import { useEffect, useState } from 'react'

export default function DoorCounter({name}) {
    const [counterName, setCounterName] = useState(name)
    const [counterValue, setCounterValue] = useState(' ')

    async function fetchAndUpdate(url) {
        let response = await fetch(url)
        let counter = await response.json()
        setCounterName(counter.name)
        setCounterValue(counter.value)
    }

    useEffect(() => {
        fetchAndUpdate('/api/counter/'+name)
    },[name])

    function increment() {
        fetchAndUpdate('/api/counter/'+name+'/increment')
    }

    function decrement() {
        fetchAndUpdate('/api/counter/'+name+'/decrement')
    }

    return (      
      <div>
        <h2>{ counterName }</h2>
        <button onClick={increment}>+</button>
        <div className='count'>{ counterValue }</div>
        <button onClick={decrement}>-</button>
      </div>
    )
}
  