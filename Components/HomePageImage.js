import React from 'react'

import Image from 'next/image'
import HomeCategory from './HomeCategory'



const HomePageImage = () => {
  return (
    <div style={{ height: '60vh', width: '100%', position: 'relative' ,zIndex:'-1'}} className=' relative'>
      <div className='relative'
        style={{
          backgroundImage: 'url("/HomeImage.png")', // Provide the image path
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          width: '100%',
          height: '100%',
          zIndex: "-1"      }}
      />
      <HomeCategory/>
    </div>
  )
}

export default HomePageImage