import { useState } from 'react';
import './App.css';
import SelectDoorCounter from './components/SelectDoorCounter'
import DoorCounter from './components/DoorCounter'

function App() {
  const [selectingCounter, setSelectingCounter] = useState(true)
  const [selectedCounter, setSelectedCounter] = useState()

  function onSelectCounter(name) {
    setSelectedCounter(name)
    setSelectingCounter(false)
  }

  return (
    <div className="App">
      <h1>Door Counter</h1>
      { (selectedCounter && !selectingCounter) && <div onClick={() => setSelectingCounter(true)}>Click here to select a different counter</div>}
      { selectingCounter ? <SelectDoorCounter onSelect={onSelectCounter}/> : <DoorCounter name={selectedCounter} /> }
    </div>
  );
}

export default App;
