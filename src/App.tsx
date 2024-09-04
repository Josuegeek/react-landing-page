import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderMenu from "./components/header";
import Main from './components/main';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderMenu></HeaderMenu>
      <Main/>
    </>
  )
}

export default App
