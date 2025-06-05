import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Debounce from './components/Debounce'
import Throttle from './components/Throttle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="box-border h-screen">
      <Debounce />
      <Throttle />
    </div>
  )
}

export default App
