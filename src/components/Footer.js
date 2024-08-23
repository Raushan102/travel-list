import React from 'react'
import {useListStorage} from '../utility/Storage'

function Footer() {

  const Items=useListStorage()
    const packedItem=Items.AllItems.filter((data)=>data.isPacked)


  const percentageOfItemsPacked=Math.round((packedItem.length/Items.AllItems.length)*100)
  
  return (
    <footer className='bg-teal-700 h-20 flex items-center justify-center text-sm tracking-tight text-center ' >
    <p>you have <span className='text-yellow-400'>{Items.AllItems.length}</span> items on your list, and  you already packed <span className='text-yellow-400'>{`${percentageOfItemsPacked ? percentageOfItemsPacked :0 }%`}</span></p>
    </footer>
  )
}

export default Footer