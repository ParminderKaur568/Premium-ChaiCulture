import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function MenuCard({ item }) {
  const { addToCart } = useContext(CartContext)

  return (
    <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
      <img
        src={item.image}
        alt={item.name}
        className='w-full h-52 object-cover'
      />

      <div className='p-4'>
        <h2 className='text-xl font-bold'>{item.name}</h2>
        <p className='text-gray-600'>{item.category}</p>
        <p className='font-semibold mt-2'>₹{item.price}</p>

        <button
          onClick={() => addToCart(item)}
          className='bg-[#f0c436] text-white px-4 py-2 rounded mt-4 w-full'
        >
          Add To Cart
        </button>
      </div>
       </div>
  )
}

export default MenuCard