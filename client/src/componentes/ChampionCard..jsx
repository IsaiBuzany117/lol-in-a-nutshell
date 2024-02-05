import { useState, useEffect } from "react";
import { LikeCorazon } from "./LikeCorazon";


export function ChampionCard (){

    const [data, setData]= useState (null);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    }, [])
    return (
            <div>
                <ul className='grid gap-4'>
                    {data?.map((user)=> (
                    <li key={user.id}>
                        <div className='champion-card grid-cols-5'>
                            <div className="flex justify-center col-span-5">{user.name}</div>
                            <div className="flex justify-center col-start-1">{user.username}</div>
                            <div className="flex justify-center col-start-2">{user.email}</div>
                            <div className='flex justify-center col-start-3 col-span-2'>{user.phone}</div>
                            <div className='flex justify-center col-start-5'>{user.website}</div>
                          
                        </div>
                    </li>))}
                </ul>
            </div>
        )
}