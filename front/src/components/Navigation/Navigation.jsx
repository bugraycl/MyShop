import React from 'react'

const Navigation = () => {
  return (
    <nav className='flex items-center py-6 px-8 justify-between gap-40'>
        <div className='flex items-center gap-6'>
            {/* Logo */}
            <h2 className="text-3xl text-black font-black gap-8">ShopEase</h2>
        </div>
        <div className='flex flex-wrap items-center gap-10 flex-1'>
        {/* Logo */}
        <ul className='flex gap-14'>
            <li className='text-gray-600 hover:text-black'>
                <a href="/">Shop</a>
            </li>
            <li className='text-gray-600 hover:text-black'>
                <a href="/mens">Men</a>
            </li>
            <li className='text-gray-600 hover:text-black'>
                <a href="/womens">Women</a>
            </li>
            <li className='text-gray-600 hover:text-black'>
                <a href="/kids">Kids</a>
            </li>
        </ul>
        </div>

        <div>
            {/* Search Bar */}
        </div>

        <div>
            {/* Action Items - Icons */}
        </div>

    </nav>
  )
}

export default Navigation
