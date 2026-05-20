import React from 'react'
import { Link } from 'react-router-dom'
import { GiClothes } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { TiHeart } from "react-icons/ti";
import { BsHandbag } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className='bg-slate-800 shadow-lg flex items-center justify-around py-3 px-32 fixed top-3 left-0 w-full'>
        <Link to='/'>
        <span className='font-semibold text-lg flex items-center gap-3 text-blue-400'>
            <GiClothes className='text-3xl'/>
            <span className='font-semibold text-2xl'>
                Shopflow
            </span>
        </span>
        </Link>
        <div className='flex items-center gap-5 text-black'>
            <Link to='/' className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300 '>
                Home
            </Link>
            <Link to='/about' className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300 '>
                About
            </Link>
            <Link to='/contact' className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300 '>
                Contact
            </Link>
            <Link to='/products' className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300 '>
                Products
            </Link>

        </div>

        <div className='flex items-center gap-4'>
            <IoIosSearch className='text-white text-xl cursor-pointer hover:text-sky-300 transition duration-300'/>
            <TiHeart className='text-white text-xl cursor-pointer hover:text-sky-300 transition duration-300' />
            <div className='relative'>
                <BsHandbag className='text-white text-xl cursor-pointer hover:text-sky-300 transition duration-300'/>
                    <span className='absolute -top-2 -right-2 bg-sky-400 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>0

                    </span>


            </div>

            





        </div>


    </nav>

  )
}

export default Navbar