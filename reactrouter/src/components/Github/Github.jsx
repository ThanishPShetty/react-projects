import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GithubFollowers() {
  const data=useLoaderData()
  //  const [data,setData]=useState([])
  // useEffect(()=>{
  //  fetch('https://api.github.com/users/ThanishPShetty')
  //  .then((response)=> response.json())
  //  .then((data)=> setData(data))
  // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    </div>
  )
}

export default GithubFollowers

export const githubInfoloaders= async ()=>{
  const response=await fetch('https://api.github.com/users/ThanishPShetty')
   return response.json()
}