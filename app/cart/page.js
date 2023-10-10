"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineHeart,AiOutlineShoppingCart} from "react-icons/ai"
import Image from 'next/image'
import { RemoveCart } from '../Redux/Cartslice'

const CartPage = () => {
  const selector = useSelector((store)=>store.cart.cart_items)  

  const dispatch = useDispatch();

  return (
    <div className='flex flex-row border  mt-[240px] py-3 px-3'>

    <div className='grid grid-flow-col gap-x-40'>
        {
            selector.map((element,index)=>(

                <div className='w-[200px] rounded-md border border-slate-300 py-2 px-1 flex flex-col cursor-pointer' key={index}>

                <div className='flex w-full'>

                <Image
                src={element?.image}
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

                    <AiOutlineHeart className='text-xl cursor-pointer'/>


                    </div>
                    
                    <div>
                        <span>Quantity - {element.quantity}</span>
                        </div>




                    <button className='bg-yellow-300 mt-3 w-[160px] ml-6 rounded-md p-1 cursor-pointer' onClick={()=>{
                        dispatch(RemoveCart(element?.id))
                    }}>Remove From Cart</button>

                



                </div>
                
            </div>

            ))
        }

      

        


    </div>
</div>
  )
}

export default CartPage