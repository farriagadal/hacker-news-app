import { Route, Routes, Link } from 'react-router-dom'
// import './App.scss'
import AppHeader from 'src/components/AppHeader'

import Home from 'src/views/Home'
import Favs from 'src/views/Favs'

function App () {
  return (
    <div className="App">
      <AppHeader />
      <div>
        <Link to="/">All</Link>
        <Link to="/favs">Favs</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favs" element={<Favs />} />
      </Routes>
    </div>
  )
}

export default App
