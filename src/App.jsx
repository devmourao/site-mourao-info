import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Bio } from './components/bio';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Links } from './components/Links';
import { Contato } from './components/Contato';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="frame">
        <Bio /> 
        <Links />
        < Contato />
        <Footer />
      </div>

    </>
  )
}

export default App
