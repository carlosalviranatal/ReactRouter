import './App.css'
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'
import { Routes, Route, Link } from 'react-router-dom'
import Rainbow from './components/Rainbow'

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/rainbow">Rainbow</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/rainbow" element={<Rainbow />} />
        </Routes>
      </div>
      <div id='footer'>
      <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/rainbow">Rainbow</Link>
      </div>
    </div>
  )
}

export default App
