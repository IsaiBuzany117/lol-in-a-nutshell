import { useState } from "react"



export function LikeCorazon (){

        const [liked, setLiked] = useState(0)
            function handleClick (){

                setLiked(liked => liked + 1)

            }


    return  <button onClick={handleClick} className='grid col-start-auto justify-items-center transition ease-in-out delay-150 fill-slate-700 hover:-translate-y-1 hover:scale-110 hover:fill-red-600 duration-300 cursor-pointer'><svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m7.24264069 2.24264069c.5-2.5 4.34314571-2.65685425 6.00000001-1 1.6034073 1.60340734 1.4999617 4.3343931 0 6l-6.00000001 6.00000001-6-6.00000001c-1.65685425-1.65685425-1.65685425-4.34314575 0-6 1.54996042-1.54996043 5.5-1.5 6 1z" stroke="currentColor"  transform="translate(3.257 4.257)"/></svg>{liked}</button>
}