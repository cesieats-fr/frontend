import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-green-800'>
        Test
      </div>

      <Outlet />
    </>
  )
}

export default App
