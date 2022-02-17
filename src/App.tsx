import { Route, Routes } from 'react-router-dom'
// import './App.scss'
import AppHeader from 'src/components/AppHeader'

import Navbar from 'src/components/Navbar'

import Home from 'src/views/Home'
import Favs from 'src/views/Favs'

function App () {
  return (
    <div className="App">
      <AppHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
    </div>
  )
}

export default App
