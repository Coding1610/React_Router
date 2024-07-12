import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashboardPage() {

    const navigate = useNavigate();
    const data = {
        name:"Yash"
    };

  return (
    <>
    <div className='mt-4 text-center text-2xl font-bold w-full'>
        <h1>Dashboard Page</h1>
        <button className='p-3 bg-teal-500 mt-2 text-white hover:shadow-lg' onClick={ () => {
            navigate( "/logout" , {state:data})}
        }>Logout</button>
    </div>
    </>
  )
}