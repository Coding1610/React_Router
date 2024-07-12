import React from 'react'
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {

    const error = useRouteError();
    console.error(error);

  return (
    <>
    <div className='mt-4 text-center text-2xl font-bold'>
        <p> Oops ! </p>
        <p> An Unexpected Error Has Occurred </p>
        <p><i><u className='text-gray-500'> {error.status} </u></i></p>
        <p><i><u className='text-gray-500'> {error.statusText} </u></i></p>
    </div>
    </>
  )
}