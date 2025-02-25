import { Link } from "react-router-dom";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { numberFormat } from "../../../../uilts/format";
import { topics as initialTopics } from "../../../../uilts/consts";
import { useState } from "react";

  
export default function Topic({item,setTopicList, topicList}){

    return (
        <Link to='/'
        className="py-2 px-4 hover:bg-[#080808] transition-colors relative  "
        >
           <div className="text-[12px] text-[#71767b] leading-4 ">
            {item.title}
           </div>
           <div className="text-[14px] font-bold leading-5  " >
           {item.topic.type == 'tag' && "#"}{item.topic.value}
           </div>
           {item?.postCount && (
            <div className="text-[12px] text-[#71767b] mt-1 leading-3 ">
             {numberFormat(item.postCount)} gönderi
            </div>
           )}
           <Popover className="right-3 pb-1 top-0 absolute">
           {({close})=>(
            <>
             <PopoverButton className="w-[33.5px] h-[33.5px] outline-none text-[#71767b] flex items-center justify-center  hover:bg-[#1d9bf01a] hover:text-[#3093d6] rounded-full z-10 ">
           
           <svg viewBox="0 0 24 24" width={17.5}>
            <path
            fill="currentColor"
             d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
            </path>
           </svg>
           
            </PopoverButton>
            <PopoverPanel className="bg-black   w-[348px] grid  shadow-box-shadow absolute top-2 right-0  px-4 py-2  rounded-2xl z-[1] ">
             <button
             type="button"
             onClick={()=>{
                setTopicList((prevList)=>{
                    const filterList=topicList.filter((x)=>x.id !==item.id)
                  return [...filterList]
                })
                close()
             }}

              className=" w-full h-10 hover:bg-[#0000004d]  py-3  flex items-center " >
             <svg className="" viewBox="0 0 24 24" width={17.5} height={17.5} >
            <path
            fill="#e7e9ea"
             d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"/>
             </svg>
             <p className="px-3  text-sm font-bold text-[#e7e9ea]  ">
            İlişkili içerik alakalı değil
            </p>

             </button>

             <button  type="button"
             onClick={()=>{
                setTopicList((prevList)=>{
                    const filterList=topicList.filter((x)=>x.id !==item.id)
                  return [...filterList]
                })
                close()
             }}
             
              className=" w-full h-10 hover:bg-[#0000004d] py-3   flex items-center " >
             <svg className="" viewBox="0 0 24 24" width={17.5} height={17.5} >
            <path
            fill="#e7e9ea"
             d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"/>
             </svg>
             <p className="px-3  text-sm font-bold  ">
             Bu gündem spam
            </p>

             </button>
             <button 
              type="button"
              onClick={()=>{
                 setTopicList((prevList)=>{
                     const filterList=topicList.filter((x)=>x.id !==item.id)
                   return [...filterList]
                 })
                 close()
              }}
             
             className=" w-full h-10 hover:bg-[#0000004d] py-3   flex items-center " >
             <svg className="" viewBox="0 0 24 24" width={17.5} height={17.5} >
            <path
            fill="#e7e9ea"
             d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"/>
             </svg>
             <p className="px-3  text-sm font-bold  text-[#e7e9ea] ">
             Bu gündem taciz içeriyor veya zararlı
            </p>

             </button>

             <button
              type="button"
              onClick={()=>{
                 setTopicList((prevList)=>{
                     const filterList=topicList.filter((x)=>x.id !==item.id)
                   return [...filterList]
                 })
                 close()
              }}
             
             className=" w-full h-10 hover:bg-[#0000004d] py-3   flex items-center " >
             <svg className="" viewBox="0 0 24 24" width={17.5} height={17.5} >
            <path
            fill="#e7e9ea"
             d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"/>
             </svg>
             <p className="px-3  text-sm font-bold  text-[#e7e9ea] ">
             İlgimi çekmiyor
            </p>

             </button>

             <button
              type="button"
              onClick={()=>{
                 setTopicList((prevList)=>{
                     const filterList=topicList.filter((x)=>x.id !==item.id)
                   return [...filterList]
                 })
                 close()
              }}
              className=" w-full h-10 hover:bg-[#0000004d] py-3  flex items-center " >
             <svg className="" viewBox="0 0 24 24" width={17.5} height={17.5} >
            <path
            fill="#e7e9ea"
             d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"/>
             </svg>
             <p className="px-3  text-sm font-bold  text-[#e7e9ea] ">
             Bu gündem yineleniyor
            </p>

             </button>

             <button 
              type="button"
              onClick={()=>{
                 setTopicList((prevList)=>{
                     const filterList=topicList.filter((x)=>x.id !==item.id)
                   return [...filterList]
                 })
                 close()
              }}
              className=" w-full h-10 hover:bg-[#00000009] py-3   flex items-center " >
             <svg className="" viewBox="0 0 24 24" width={17.5} height={17.5} >
            <path
            fill="#e7e9ea"
             d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"/>
             </svg>
             <p className="px-3 text-left  text-sm font-bold  text-[#e7e9ea] ">
             Bu gündem başlığı zararlı veya spam içeriyor
            </p>

             </button>
             
            </PopoverPanel>
            </>
           )}
      
           </Popover>
          
        </Link>
        
    )
}