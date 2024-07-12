import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {

    const error =  useRouteError();
    console.error(error);

  return (
    <>
    <div className='text-2xl font-bold text-center'>
        <p> oops ! an unexpected error has occurred </p>
        <p> {error.statusText}</p>
        <p> {error.status} </p>
    </div>
    </>
  )
}