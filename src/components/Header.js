
import React from 'react'
import coconut from '../assets/island-600nw-313011086.webp'
import shoutCase from '../assets/pngtree-luggage-clipart-set-of-cartoon-suitcases-with-wheels-vector-png-image_11069105.png'

function Header() {
  return (
    <header className='bg-amber-500 flex  items-center justify-center h-24 md:h-16 gap-3'>
      <img src={coconut}alt="coconut tree logo" className='w-12 h-12 mix-blend-multiply'/>
      <h1 className='text-4xl'>FAR AWAY</h1>
        <img src={shoutCase} alt="shoutCase logo" className='w-12 h-12  mix-blend-multiply' />
    </header>
  )
}

export default Header