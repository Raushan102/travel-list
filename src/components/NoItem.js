import React from 'react'
import noItemFound from '../assets/blank-packaging-boxes-open-mockup-isolated-on-white-background-photo.jpg'
function NoItem() {
  return (
   <div className='text-center flex items-center justify-center flex-col'>
  <img src={noItemFound} alt="no item found"  className='mix-blend-multiply md:h-80 md:w-80'/>
    <p className='text-teal-600 font-extrabold mb-12'> no item found 😒!</p>
  </div>
  )
}

export default NoItem