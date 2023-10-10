"use client"
import React from 'react'
import Image from 'next/image'

import {AiOutlineHeart,AiOutlineShoppingCart ,AiFillHeart} from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { AddToCart } from '@/app/Redux/Cartslice'

const Product_Array = [{
    name : "Shirt",
    price : 1300,
    like : false,
    link : "https://assets.ajio.com/medias/sys_master/root/20230921/FDY3/650b514cafa4cf41f5f5c80d/-473Wx593H-466602015-navy-MODEL.jpg"
},{
    name : "Shirt",
    price : 1900,
    like : false,
    link : "https://assets.ajio.com/medias/sys_master/root/20230920/3WXP/650b0b67ddf7791519eab28d/-473Wx593H-466601997-green-MODEL.jpg"

},

    {
        name : "T-Shirt",
        price : 2000,
        like : false,
        link : "https://assets.ajio.com/medias/sys_master/root/20230921/yER3/650b528aafa4cf41f5f5e012/-473Wx593H-466602035-black-MODEL.jpg"
    
    },
    {
        name : "T-Shirt",
        price : 1000,
        like : false,
        link : "https://assets.ajio.com/medias/sys_master/root/20230921/Z78U/650bc4a4ddf7791519ecdaa1/-473Wx593H-466607728-green-MODEL.jpg"
    
    }
]

const ProductPage = () => {

const dispatch = useDispatch()

  return (
    <div className='flex flex-row border  mt-[240px] py-3 px-3'>

        <div className='grid grid-flow-col gap-x-40'>
            {
                Product_Array.map((element,index)=>(

                    <div className='w-[200px] rounded-md border border-slate-300 py-2 px-1 flex flex-col cursor-pointer' key={index}>

                    <div className='flex w-full'>
    
                    <Image
                    src={element?.link}
            alt="Image Alt Text"
            width={190} // Specify the width of the image
            height={170} // Specify the height of the image
            className='object-contain'
                    />
                    </div>
    
                    <div className=' flex flex-col'>
    
                        <p className='font-bold text-xl'>{element.name}</p>
    
                        <div className='flex justify-between'>
                        <span className='font-bold'>Rs{element.price}</span>
    
                        <span onClick={()=>!element?.link}> {
                          
                          element?.like ? <AiFillHeart className='text-xl cursor-pointer'/> : <AiOutlineHeart className='text-xl cursor-pointer'/>

                        } </span>
    
    
                        </div>
    
    
                        <button className='bg-yellow-300 mt-3 w-[110px] ml-6 rounded-md p-1 cursor-pointer' onClick={()=>{
                            dispatch(AddToCart({
                                id :index,
                                name : element.name,
                                price:element.price,
                                image : element.link,
                                quantity : 1
                            }))
                        }}>Add to Cart</button>
    
                    
    
    
    
                    </div>
                    
                </div>

                ))
            }

          

            


        </div>
    </div>
  )
}

export default ProductPage