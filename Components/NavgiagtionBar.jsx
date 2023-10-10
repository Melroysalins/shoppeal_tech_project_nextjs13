"use client"
import React from 'react'

import Image from 'next/image'

import {AiOutlineHeart,AiOutlineShoppingCart} from "react-icons/ai"

import {BsFillPersonFill} from "react-icons/bs"
import Link from 'next/link'
import { useSelector } from 'react-redux'

const NavgiagtionBar = () => {

  const selector = useSelector((store)=>store.cart.cart_items)

  return (
    
    <div className='flex justify-center  px-2 py-4 w-full bg-slate-100 gap-5 items-center'>

     <div className='object-contain'>
        <Image

        width={50}
        height={30}

        src="https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-happy-shopping-logo-template_467913-990.jpg"
        className='object-contain '
        />
    </div> 

    <div className=' w-[380px] flex items-center gap-5'>
    <input type='text' placeholder='Search anything....' className='px-2 py-1.5 rounded-lg  w-full'/>
    <AiOutlineHeart className='text-xl cursor-pointer'/>
    </div>

    <div className='flex'>

    <div className='ml-4 flex items-center gap-2'>
        <BsFillPersonFill className='text-sm cursor-pointer'/>
        <span className='cursor-pointer'>My Account</span>
    </div>

    <div className='flex items-center ml-7 gap-1 cursor-pointer'>
      <AiOutlineShoppingCart/>
      <Link href="/cart">Cart - {selector?.length}</Link>
    </div>
    
    </div>



    </div>
  )
}

export default NavgiagtionBar