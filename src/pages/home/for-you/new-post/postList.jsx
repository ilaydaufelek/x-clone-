import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useState } from "react";
import { useEffect } from "react";

export default function PostsList({post,postList,setPostList}) {
 
   const [posts,setPosts]=useState([])
   
   
   console.log(posts);
   
   useEffect(()=>{
    const newPost =JSON.parse(localStorage.getItem('posts')) || []
    setPosts(newPost)

   },[])
   const handleDelete = (postId) => {
    setPostList(postList.filter((post) => post.id !== postId));
   localStorage.setItem('posts',JSON.stringify(deletePost))
   
   
  };
  return (
      postList.reverse().map((post)=>(
        <div className="px-4 py-3 gap-3 border-b  border-[color:var(--border-base)] flex hover:bg-[color:var(--background-fourth)] transition-colors cursor-pointer"
         key={post.id} >
            <img
            className="w-10 h-10 rounded-full object-cover"
            src={post.author.avatar} alt="" />
            <div className="flex-1" >
            <header className="leading-5 flex items-center justify-between " >
                
                <div className="flex items-center gap-1 mb-0.5">
                <a className="hover:underline flex items-center font-bold "  href="#">
                    {post.author.fullName}
                    {post.author?.verified && (
                    <svg  className="text-[#1d9bf0]  ml-0.5 h-[1.172rem] "
                      viewBox="0 0 22 22" >
                    <path 
                    fill="currentColor"
                     d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"/>
                    </svg>
                )}

                </a>
                <div className="text-[color:var(--color-baseSecondary)]  text-[0.938rem] gap-1 flex items-center  " >
                  <div> @{post.author.userName}</div>
                  <div>·</div>
                  <div> 
                    {/* {new Date(post.createdAt).toLocaleString()} */}
                    Şimdi
                   </div> 
                </div>
                </div>

               <Popover className='relative' >
               <PopoverButton
               className="h-[2.172rem] w-[2.172rem] flex items-center justify-center hover:bg-[#1d9bf01a] rounded-full " >
                <svg 
                className="text-[color:var(--color-baseSecondary)] h-[1.172rem] "
                 viewBox="0 0 24 24" >
                <path
                fill="currentColor"
                 d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                </svg>
                </PopoverButton>
                <PopoverPanel  className='  bg-[color:var(--background-primary)]  w-[21.75rem] grid  overflow-hidden shadow-box absolute  top-2 right-0   rounded-2xl z-[1] ' >
                 <button 
                 onClick={()=>handleDelete(post.id)}
                 className="h-10 text-red-600 w-full font-bold flex px-4 py-2   items-center gap-1.5 hover:bg-[color:var(--background-fourth)] " >
                 <div>
                 <svg className="h-[1.172rem] " viewBox="0 0 24 24">
                  <path
                  fill="currentColor"
                  d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"/>
                 </svg>
                 </div>
                 Sil


                 </button>
                </PopoverPanel>
               </Popover>

                </header>
                
                  <div>
                    {post.content}
                  </div>

              
               <div className="flex -ml-1.5 mt-1.5" >
              <div className=" flex-1 group flex items-center  " >
             <div className="h-[2.172rem] w-[2.172rem] flex transition-colors items-center justify-center group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1D9BF0] " >
            <svg  className="  group-hover:text-[#1D9BF0] text-[color:var(--color-baseSecondary)] h-[1.172rem] "  viewBox="0 0 24 24"  >
               <path
               fill="currentColor"
             d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"/>
                </svg>
                  </div>
            <div className="text-[0.813rem] transition-colors text-[color:var(--color-baseSecondary)] group-hover:text-[#1D9BF0] flex items-center " ></div>
   
                  </div>
   
                <div className="flex-1 group flex items-center  " >
                <div className="h-[2.172rem] w-[2.172rem] flex transition-colors items-center justify-center group-hover:bg-[#00ba7c1a] rounded-full group-hover:text-[#07BC7F] " >
                 <svg  className="  group-hover:text-[#07BC7F] text-[color:var(--color-baseSecondary)] h-[1.172rem] "  viewBox="0 0 24 24"  >
                 <path
                 fill="currentColor"
                  d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/>
                  </svg>
                   </div>
                  <div className="text-[0.813rem] transition-colors text-[color:var(--color-baseSecondary)] group-hover:text-[#07BC7F] flex items-center " ></div>
   
                   </div>
                    <div className="flex-1 group flex items-center  " >
                   <div className="h-[2.172rem] w-[2.172rem] flex transition-colors items-center justify-center group-hover:bg-[#f918801a] rounded-full group-hover:text-[#f91880] " >
                   <svg  className="  group-hover:text-[#f91880] text-[color:var(--color-baseSecondary)] h-[1.172rem] "  viewBox="0 0 24 24"  >
                   <path
                   fill="currentColor"
                     d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"/>
                   </svg>
                    </div>
                    <div className="text-[0.813rem] transition-colors text-[color:var(--color-baseSecondary)] group-hover:text-[#f91880] flex items-center " ></div>
   
                  </div>
   
                  <div className="flex-1 group flex items-center  " >
                  <div className="h-[2.172rem] w-[2.172rem] flex transition-colors items-center justify-center group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1D9BF0] " >
                  <svg  className="  group-hover:text-[#1D9BF0] text-[color:var(--color-baseSecondary)] h-[1.172rem] "  viewBox="0 0 24 24"  >
                  <path
                  fill="currentColor"
                  d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"/>
                  </svg>
                  </div>
                  <div className="text-[0.813rem] transition-colors text-[color:var(--color-baseSecondary)] group-hover:text-[#1D9BF0] flex items-center " ></div>
   
                  </div>
                  <div className=" group flex items-center  " >
                  <div className="h-[2.172rem] w-[2.172rem] flex transition-colors items-center justify-center group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1D9BF0] " >
                  <svg  className="  group-hover:text-[#1D9BF0] text-[color:var(--color-baseSecondary)] h-[1.172rem] "  viewBox="0 0 24 24"  >
                  <path
                  fill="currentColor"
                  d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"/>
                  </svg>
                  </div>
                  <div className="text-[0.813rem] transition-colors text-[color:var(--color-baseSecondary)] group-hover:text-[#1D9BF0] flex items-center " ></div>
   
                  </div>

                 <div className=" group flex items-center  " >
                  <div className="h-[2.172rem] w-[2.172rem] flex transition-colors items-center justify-center group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1D9BF0] " >
                  <svg  className="  group-hover:text-[#1D9BF0] text-[color:var(--color-baseSecondary)] h-[1.172rem] "  viewBox="0 0 24 24"  >
                  <path
                  fill="currentColor"
                  d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/>
                  </svg>
                  </div>
                  <div className="text-[0.813rem] transition-colors text-[color:var(--color-baseSecondary)] group-hover:text-[#1D9BF0] flex items-center " ></div>
   
                  </div>  
   
                   </div> 
           


               

            </div>

        </div>
      ))
  );
}
