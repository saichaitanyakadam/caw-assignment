import React from 'react'
import {AiOutlineDown} from "react-icons/ai"
import {TfiShoppingCart} from "react-icons/tfi"

const Header = () => {
  return (
    <header className="bg-green-800 h-[6vh] flex items-center px-20 justify-between text-white">
      <div className='flex'>
      <img src="https://reeco.io/assets/logo.44b75468.svg" width={80} alt='Logo' className='text-red-500 grayscale-[100]'/>
        <ul className='list-none flex gap-10 ml-10 '>
            <li>Store</li>
            <li>Orders</li>
            <li>Analytics</li>
        </ul>
      </div>
      <div className='flex gap-10'>
          <div className='relative flex'>
          <TfiShoppingCart  size={24} />
            <span className='absolute bottom-3 right-5 bg-green-500 rounded-full px-[1px] text-[10px]'>12</span>
          </div>
            <div className='flex items-center gap-1'>
                <p>Hello,James</p>
                <AiOutlineDown size={15} className='mt-1'/>
            </div>

      </div>

    </header>
  )
}

export default Header