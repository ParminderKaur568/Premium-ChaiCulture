import { useState } from 'react'
import menuData from '../data/menuData'
import MenuCard from '../components/MenuCard'

function Menu() {
  const [category, setCategory] = useState('All')

  const filteredData =
    category === 'All'
      ? menuData
      : menuData.filter((item) => item.category === category)

  return (
    <div className='px-6 py-10'>
      <h1 className='text-4xl font-bold text-center mb-8'>Our Menu</h1>

      <div className='flex justify-center gap-4 mb-8'>
        <button onClick={() => setCategory('All')}>All</button>
        <button onClick={() => setCategory('Tea')}>Tea</button>
        <button onClick={() => setCategory('Coffee')}>Coffee</button>
        <button onClick={() => setCategory('Snacks')}>Snacks</button>
      </div>

      <div className='grid md:grid-cols-3 gap-8'>
        {filteredData.map((item) => (
          <MenuCard key={item.id} item={item} />
           ))}
      </div>
    </div>
  )
}

export default Menu