import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/stranjar')
    //     .then((res)=> res.json())
    //     .then((data)=> {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='
        bg-gray-700
        text-white
        text-xl rounded-sm
        p-4 m-4 text-center
    
    '
    >
    
        GitHub User : {data.name} <br />
        Followers : {data.followers} <br />
        Location : {data.location}
        <img  className='rounded-lg' src={data.avatar_url}  alt="github picture" width={200}  />

    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/stranjar')
    
    return response.json()
}