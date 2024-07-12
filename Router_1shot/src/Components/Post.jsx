import React from 'react'
import { useParams , useSearchParams } from 'react-router-dom'

export default function PostPage() {

    // URL : http://localhost:5173/post/mobile?price=12000&color=Black
    const { category , id } = useParams();
    let [serachParams , setSearchParams ] = useSearchParams();
    // console.log(serachParams); 
    // console.log(serachParams.size);
    // console.log(serachParams.get('price'));
    // console.log(serachParams.get('color'));

  return (
    <>
    <div className='mt-4 text-center text-2xl font-bold'>
        <p> Post Page : { category } : { id } </p>
    </div>
    </>
  )
}