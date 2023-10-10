import React from 'react'
import Image
 from 'next/image'
import ProductPage from './ProductPage'

const HomeCategory = () => {
  return (
   <div className='flex flex-col border justify-center'>

    <div className=' grid  grid-flow-col  cursor-pointer rounded-sm  absolute  w-[690px] p-4 py-4 left-[300px] t-10 shadow-lg top-[450px] bg-white gap-x-8'>

     

        <div>
        <Image
        src="https://assets.ajio.com/medias/sys_master/root/20230921/FDY3/650b514cafa4cf41f5f5c80d/-473Wx593H-466602015-navy-MODEL.jpg"
        alt="Image Alt Text"
        width={200} // Specify the width of the image
        height={200} // Specify the height of the image
        className='object-contain'
      />
    </div>
        

        <div className='flex'>
        <Image  src="https://assets.ajio.com/medias/sys_master/root/20230920/3WXP/650b0b67ddf7791519eab28d/-473Wx593H-466601997-green-MODEL.jpg"
          width={200}
          height={200}
          className='object-contain'
        />
        </div>

        <div className='flex'>
        <Image  src="https://assets.ajio.com/medias/sys_master/root/20230920/3WXP/650b0b67ddf7791519eab28d/-473Wx593H-466601997-green-MODEL.jpg"
          width={200}
          height={200}
          className='object-contain'
        />
        </div>

        <div className='flex'>
        <Image  src="https://assets.ajio.com/medias/sys_master/root/20230920/3WXP/650b0b67ddf7791519eab28d/-473Wx593H-466601997-green-MODEL.jpg"
          width={200}
          height={200}
          className='object-contain'
        />
        </div>



      </div>

      <ProductPage/>

      </div> 
    

  )
}

export default HomeCategory