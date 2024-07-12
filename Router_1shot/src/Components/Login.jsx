import React from 'react'
import { useLocation } from 'react-router-dom'

export default function LoginPage(props){

    const location = useLocation();
    // console.log(location);

  return (
    <>
    <div className='mt-4 text-center text-2xl font-bold'>
        <p>Login Page</p>
        <p className='text-gray-600'> <i> UserId: {location.state.userid} </i></p>
        <p className='text-gray-600'> <i> Passwoord : {location.state.pass} </i></p>
    </div>
    </>
  )
}