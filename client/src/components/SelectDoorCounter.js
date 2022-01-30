import { useEffect, useState } from 'react'

function CounterLabel({name, onClick}) {
    return (
        <div className='counter-label' onClick={onClick}>{name}</div>
    )
}

function AvailableCounters({onSelect}) {
    const [availableCounters, setAvailableCounters] = useState([])

    async function fetchCounters() {
        let response = await fetch('/api/counter')
        let availableCounters = await response.json()
        setAvailableCounters(availableCounters)
    }
    
    useEffect(() => {
        fetchCounters()
    },[])


    return (availableCounters.length !== 0 ? (
        <div>
            <h2>Select Counter</h2>
            { availableCounters.map((name) => <CounterLabel name={name} onClick={() => onSelect(name)}/>) }
            <h2>-- or --</h2>
        </div>
    ): null)
}

export default function SelectDoorCounter({onSelect}) {
    const [createCounterName, setCreateCounterName] = useState('')

    function updateCreateCounterName(e) {
        setCreateCounterName(e.target.value)
    }

    function createCounter() {
        console.log('Creating counter')
        onSelect(createCounterName)
    }

    return (      
      <div>
          <AvailableCounters onSelect={onSelect}></AvailableCounters>
          <div>
              <input 
                className='counter-entry' 
                placeholder='Enter a new name' 
                value={createCounterName}
                onChange={updateCreateCounterName} />
            </div>
          <button onClick={createCounter} disabled={createCounterName.length === 0}>Create</button>
      </div>
    )
}
  