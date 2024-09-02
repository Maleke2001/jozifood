import React from 'react'
import img1 from '../assets/image1.jpg'

export const Navbar = () => {
  return (
   <div className='h-screen '> 
      <div className='flex justify-around'>
       <img src={img1} className=''/>
       <div className=''>
    
    </div>
        <nav>
          <a>Home</a>  
          <a>Menu</a>
          <a>Abous</a>
          <a>Contact</a>

        </nav>


       </div>
    </div>
   
  )
}
