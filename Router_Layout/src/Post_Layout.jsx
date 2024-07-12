import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Post_Layout() {
  return (
    <>
    <div className='text-xl font-bold w-full flex justify-end'>
        <Outlet/>
        <ul className='flex flex-col p-4 border-x-4 border-y-4 w-max m-2'>
            <li><i><NavLink to="/post/mobile" style={({isActive}) => {return {color : isActive ? 'green' : 'purple'};} }>Mobile</NavLink></i></li>
            <li><i><NavLink to="/post/laptop" style={({isActive}) => {return {color : isActive ? 'green' : 'purple'};} }>Laptop</NavLink></i></li>
            <li><i><NavLink to="/post/tv" style={({isActive}) => {return {color : isActive ? 'green' : 'purple'};} }>Tv</NavLink></i></li>
            <li><i><NavLink to="/post/watch" style={({isActive}) => {return {color : isActive ? 'green' : 'purple'};} }>Watch</NavLink></i></li>
        </ul>
    </div>
    </>
  )
}