import { useState, useRef } from "react"
import {useClickAway} from 'react-use';



export default function Search(){
    const [focus,setFocus] =useState(false)
    const [query,setQuery]=useState('')
    const ref=useRef(null)
   
    useClickAway(ref, () => {
       setFocus(false)
      
      });

    return(
       
          <div
          ref={ref}
           className="min-h-[32px] h-[50px] mb-3 flex items-center sticky top-0 bg-[color:var(--background-primary)] z-[10] ">
         
          <label className="h-[42px] rounded-full border border-[color:var(--border-base)] w-full  relative group   focus-within:border-[color:var(--color-primary)] focus-within:border-[2px] ">
           <div className="w-[50px] h-full flex items-center text-[color:var(--color-baseSecondary)] pl-1 absolute top-0 left-0  pointer-events-none ">
           <svg viewBox="0 0 24 24" 
            height={15.75}
            fill="currentColor" 
            className="min-w-[32px] " >

            <path
            d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/>
            </svg>
           </div>
            <input
            placeholder="Ara"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            onFocus={()=>setFocus(true)}
           
             type="text" className="w-full h-full bg-transparent rounded-full  outline-none pl-[32px] text-[14px] placeholder:text-[#71767b] scale-y-75  " />
             {(query && focus) &&(
                <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={()=>setQuery('')}
                onBlur={()=>setFocus(false)}
                 className="absolute flex mb-[1px] top-1/2 min-w-[22px] -translate-y-1/2 right-3 text-[color:var(--color-base)]  ">
                    <svg viewBox="0 0 24 24" width={21} height={21}>
                    <path
                    fill="currentColor"
                    d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm3.71 12.54l-1.42 1.42-2.29-2.3-2.29 2.3-1.42-1.42 2.3-2.29-2.3-2.29 1.42-1.42 2.29 2.3 2.29-2.3 1.42 1.42-2.3 2.29 2.3 2.29z"/>
                    </svg>
                </button>
             )}
            
            </label>
            { focus && (
                <div className="absolute top-full -translate-y-1 bg-[color:var(--background-primary)]  shadow-box w-full max-h-[calc(-50px + 80vh)] rounded-lg text-center min-h-[100px] ">
              <p className="p-3 pt-5  text-[color:var(--color-baseSecondary)] text-[14.5px]  ">
              Kişileri, listeleri veya anahtar kelimeleri aramayı dene
              </p>
                </div>
             )}
          
        </div>
    )
}