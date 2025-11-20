import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const links = [
    { name: 'Pacients', url: '/pacients' },
    { name: 'Metges', url: '/metges' },
    { name: 'Cites', url: '/cites' },
    { name: 'Farmàcia', url: '/farmacia' }
  ]

  return (
    <>
      <div className="header-logos">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>HOSPITAL</h1>

      <div className="links">
        {links.map((link) => (
          <a key={link.name} href={link.url} className="hospital-link">
            {link.name}
          </a>
        ))}
      </div>
    </>
  )
}

export default App
