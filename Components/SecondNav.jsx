"use client"

import React, { useState } from 'react'
import Link from 'next/link'




const SecondNav = () => {

const [active , Setactive] = useState("Home")


const  Link_array = [{
    name : "Home",
    link : "/"
},

{

    name : "About",
    link: "/about"
},

{
    name : "Categories",
    link : "/category"
},
{

    name : "orders",

    link : "/orders"
},
{
    name:"Order History",
    link : "/"
}



]


const handleselectedlink = (value) => {
    Setactive(value)
}




  return (
    <div className='flex justify-center gap-9 mr-20 w-full'>
       

        {Link_array.map((ele,ind)=> (
             <Link href={ele?.link} key={ind} className={active === ele?.name ? "opacity-100" : "opacity-40"} onClick={()=>handleselectedlink(ele.name)}>{ele?.name}</Link>
        ))

        }
        
    </div>
  )
}

export default SecondNav