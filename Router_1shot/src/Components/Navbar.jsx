import React from 'react'
import { NavLink , Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>

    {/* Here I'm use "a" tag because I got error while using Link and NavLink */}
    
    <div className='m-10 font-bold'>
        <ul className='flex flex-row border-x-4 border-y-4 justify-between p-4 flex-wrap'>
            <li><i><a className='text-black' href='/'> Router </a> </i></li>
            <li><i><a className='text-purple-500' href='/dashboard'> Dashborad </a></i></li>
            <li><i><a className='text-lime-500' href='/login'> Login </a></i></li>
            <li><i><a className='text-orange-500' href='/logout'> Logout </a></i></li>
            <li><i><a className='text-blue-500' href='/home'> Home </a></i></li>
            <li><i><a className='text-red-500' href='/about'> About </a></i></li>
            <li><i><a className='text-green-600' href='/contact'> Contact </a></i></li>
            <li><i><a className='text-yellow-500' href='/post/mobile'> Post </a></i></li>
            <li><i><a className='text-pink-500' href='/post/mobile/samsung'> Post Id </a></i></li>
        </ul>
    </div>
    </>
  )
}