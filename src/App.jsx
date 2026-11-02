import { useState } from 'react'
import { format} from 'date-fns'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <p classname="clock">{format(new Date(), 'PPpp')}</p>
      </div>
    </>
  )
}

export default App
