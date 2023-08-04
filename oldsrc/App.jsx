import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar/>
      </main>
    </>
  )
}

export default App