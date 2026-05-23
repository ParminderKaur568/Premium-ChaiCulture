import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext)

  return (
    <div className='px-6 py-10'>
      <h1 className='text-4xl font-bold text-center mb-8'>Your Cart</h1>

      {cart.length === 0 ? (
        <p className='text-center'>Cart is Empty</p>
      ) : (
        <div className='space-y-4'>
          {cart.map((item, index) => (
            <div
              key={index}
              className='flex justify-between items-center bg-white shadow p-4 rounded-lg'
            >
              <div>
                <h2 className='font-bold'>{item.name}</h2>
                <p>₹{item.price}</p>
              </div>
<button
                onClick={() => removeFromCart(index)}
                className='bg-[#f0c436] text-white px-4 py-2 rounded'
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Cart