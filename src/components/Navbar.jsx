import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Navbar() {
  const { cart } = useContext(CartContext)

  return (
    <nav className='relative bg-[#291313] shadow-[0_0_25px_rgba(212,175,55,0.25)] overflow-hidden text-white px-6 py-4 flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>Chai Culture</h1>

      <div className='flex gap-6'>
        <NavLink className="hover:text-[#D4AF37] transition duration-300" to='/'>Home</NavLink>
        <NavLink className="hover:text-[#D4AF37] transition duration-300" to='/menu'>Menu</NavLink>
        <NavLink className="hover:text-[#D4AF37] transition duration-300" to='/about'>About</NavLink>
        <NavLink className="hover:text-[#D4AF37] transition duration-300" to='/cart'>Cart ({cart.length})</NavLink>
      </div>
    </nav>
  )
}
export default Navbar