import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className='m-10 font-bold text-xl text-center'>
        <ul className='flex flex-row justify-around border-x-4 border-y-4 p-4 mb-4'>
            <li><i><NavLink to="/" style={({isActive}) => { return { color : isActive ? "blue" : "red" };}}> Layout </NavLink></i></li>
            <li><i><NavLink to="/home" style={({isActive}) => { return { color : isActive ? "blue" : "red" };}}> Home </NavLink></i></li>
            <li><i><NavLink to="/contact" style={({isActive}) => {return {color : isActive ? "blue" : "red" };}}> Contact </NavLink></i></li>
            <li><i><NavLink to="/about" style={({isActive}) => {return {color : isActive ? "blue" : "red" };}}> About </NavLink></i></li>
            <li><i><NavLink to="/post" style={({isActive}) => {return {color : isActive ? "blue" : "red" };}}> Post </NavLink></i></li>

        </ul>
      <Outlet/> {/* Child Component ne jya render karavu hoy tya <Outlet/> lakhvanu*/}
    </div>
    </>
  )
}