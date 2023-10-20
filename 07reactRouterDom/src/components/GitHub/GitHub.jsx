import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
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
    <div className="flex p-6 font-mono">
  <div className="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-orange-600">
    <img src={data.avatar_url} alt="" className="absolute z-10 inset-0 w-full h-full object-cover " loading="lazy" />
  </div>
  <form className="flex-auto pl-6">
    <div className="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
      <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
        {data.name}
      </h1>
     
      <div className="relative text-lg text-white">
        Bio: {data.bio}
      </div>
      
    </div>
    <div className="flex items-baseline my-6">
      <div className="space-x-3 flex text-sm font-medium">
       Public Repo: {data.public_repos} || Followers: {data.followers} || Location: {data.location} || Twitter: {data.twitter_username} 
      </div>
    </div>
    <div className="flex space-x-2 mb-4 text-sm font-medium">
      <div className="flex space-x-4">
        <button className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-orange-700 text-white text-black" type="submit">
          {/* <a href="https://github.com/stranjar" >GitHub</a> */}
          <a href="https://github.com/stranjar">Github</a>
        </button>
        
      </div>
      
    </div>
    
  </form>
</div>
  )
}

export default GitHub

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/stranjar')
    
    return response.json()
}