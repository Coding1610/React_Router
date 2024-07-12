import React from 'react'
import { useLocation } from 'react-router-dom'

export default function LogoutPage() {

    const location = useLocation();

  return (
    <>
    <div className='mt-4 text-center text-2xl font-bold'>
        <h1>Logout Page</h1>
        <p className='text-gray-600'> <u>{location.state.name}</u> you are Logged Out</p>
    </div>
    </>
  )
}