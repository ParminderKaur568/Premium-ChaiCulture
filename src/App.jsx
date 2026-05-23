import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Cart from './pages/Cart'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
