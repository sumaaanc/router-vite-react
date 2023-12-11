import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {
    // const [data, setData] = useState([])

    // const URL = 'https://api.github.com/users/sumaaanc'
    // useEffect(()=>{
    //     fetch(URL)
    //     .then(res => res.json())
    //     .then(res => {
    //         setData(res)})
    // }, [])
    const data = useLoaderData()
  return (
    <div className="bg-gradient-to-br from-gray-200 to-gray-100 text-white text-center py-8 px-6 rounded-lg shadow-lg">
    <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
        Github Info: 
    </h1>
    <img src={data.avatar_url} alt="image" className='h-56 w-56 m-10'/>
    <div className="grid grid-cols-3 gap-4 text-left m-7">
        <div>
            <p className="ml-4 text-md tracking-wide font-semibold w-40 text-gray-800">Username:</p>
            <p className="ml-4 text-lg  text-gray-800">{data.login}</p>
        </div>
        <div>
            <p className="ml-4 text-md tracking-wide font-semibold w-40 text-gray-800">Bio:</p>
            <p className="ml-4 text-lg text-gray-800">{data.bio || 'Not available'}</p>
        </div>
        <div>
            <p className="ml-4 text-md tracking-wide font-semibold w-40 text-gray-800">Total Followers:</p>
            <p className="ml-4 text-lg  text-gray-800">{data.followers}</p>
        </div>
        <div>
            <p className="ml-4 text-md tracking-wide font-semibold w-40 text-gray-800">Total Following:</p>
            <p className="ml-4 text-lg  text-gray-800">{data.following}</p>
        </div>
        <div>
            <p className="ml-4 text-md tracking-wide font-semibold w-40 text-gray-800">Repo:</p>
            <p className="ml-4 text-lg  text-gray-800">{data.public_repos}</p>
        </div>
    </div>
</div>
  )
}

export default Github

export const loaderGetData = async ()=>{
    const URL = 'https://api.github.com/users/sumaaanc'
    let response = await fetch(URL)
    let data = await response.json()
    console.log("loader function")
    return data
}
