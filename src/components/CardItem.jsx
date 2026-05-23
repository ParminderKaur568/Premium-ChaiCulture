import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item, index }) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row items-center gap-6 p-5 border border-gray-100">
      
      {/* Product Image */}
      <div className="w-full md:w-40 h-40 overflow-hidden rounded-xl">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-sm uppercase tracking-widest text-yellow-600 mb-2">
          {item.category}
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {item.name}
        </h2>

        <p className="text-gray-600 leading-7">
          Premium handcrafted chai inspired by authentic Indian royal flavors.
        </p>

        <p className="text-2xl font-semibold text-orange-500 mt-4">
          ₹{item.price}
        </p>
      </div>

      {/* Remove Button */}
      <div>
        <button
          onClick={() => removeFromCart(index)}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition duration-300 shadow-lg"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;