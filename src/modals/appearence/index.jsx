import { Link } from "react-router-dom";
import { useAppearance } from "../../store/appearance/hooks";
import classNames from "classnames";
import { setBackgroundColor,  setBorder, setColor, setFontSize, setShadow } from "../../store/appearance/actions";
import Button from "../../components/button";
import { colors, fontSizes } from "../../uilts/consts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



export default function AppearanceModal({close}){
    const {backgroundColor,color,fontSize}= useAppearance()
    const [fontSizePercent,setSizePercent] =useState()
    

   

    useEffect(()=>{
      setSizePercent(document.querySelector('.active-font-size').offsetLeft +10 )
       

    },[fontSize])


    return (
        <div className="w-[600px]  bg-[color:var(--background-primary)] border border-[color:var(--border-base)] rounded-2xl ">
       <h3 className="mt-8 mb-3 text-[1.438rem] leading-7 font-bold text-center " >Görünüm</h3>
       <div className="p-8 pt-0 ">
        <p className=" text-[color:var(--color-baseSecondary)] leading-5 text-[0.875rem]  " >
        Kullandığın yazı tipi boyutunu, rengi ve arka planı yönet. Bu ayarlar, bu tarayıcıdaki tüm X hesaplarını etkiler.
      </p>
      <div className=" my-2">
        <div className=" flex py-3 gap-3 ">
            <img
            className="w-[40px] h-[40px] object-cover rounded-full"
             src="https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_normal.jpg" alt="" />
             <div className=" flex-1 flex flex-col">
                <header className="mb-0.5 flex" >
                    <div className="flex items-center text-[color:var(--base-color)]" >
                        X
                        <svg className="ml-0.5"
                        fill="#1d9bf0" 
                        viewBox="0 0 22 22" width={14.95}  height={14.95} >
                        <path 

                         d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"/>
                        </svg>
                        </div>
                        <div className="text-[color:var(--color-baseSecondary)] text-[0.875rem] ml-1 flex items-center  " >
                            @X  · 15d
                        </div>
                </header>
                <div className="text-[0.875rem] text-[color:var(--base-color)] " >
                X'in merkezinde, tıpkı bunun gibi gönderi denen kısa mesajlar yatar. Gönderiler; fotoğraflar, videolar, bağlantılar, metinler, etiketler ve <Link className="text-[#1d9bf0]" to='/x'>@X </Link> 
                 gibi bahsetmeler içerebilir.
                </div>

             </div>

        </div>
        <div className="h-px w-full my-3  bg-[color:var(--background-third)] "/>
        <section>
       <h3 className=" text-[18px] mb-2 leading-6 font-bold" >Yazı tipi boyutu</h3>
        <div className="py-4 flex  items-center justify-center gap-5  " >
           <div className="text-[0.75rem]" >Aa</div> 
           <div className="h-1 flex-1 bg-[color:var(--color-secondary)] rounded-full flex   relative " >
            <div style={{ width: `${fontSizePercent}px` }}  className="h-full   absolute rounded-full top-0 left-0 bg-[color:var(--color-primary)] " />
           <div className=" absolute flex justify-between w-[calc(100%+8px)] -top-3.5   " >
           {fontSizes.map((fs,index)=>( 
                <button key={index}
                onClick={(e)=>{
                    setFontSize(fs)
                    if (e.currentTarget) {
                        console.log('offsetLeft:', e.currentTarget.offsetLeft);
                    } else {
                        console.log('e.currentTarget null!');
                    }
                  

                }}
                 className={classNames(" before:absolute before:inset-0 before:rounded-full  before:hover:bg-[color:var(--color-primary)] before:hover:opacity-10 w-8 h-8 rounded-full flex items-center justify-center relative ", {
                   ' active-font-size':fs === fontSize,
                 })} >
                    <div className={classNames("w-3 h-3 rounded-full bg-[color:var(--color-secondary)] ", {
                        'w-4 h-4':fs === fontSize,
                        '!bg-[color:var(--color-primary)]':fs <= fontSize
                    })} />

                </button>
            ))}
           </div>
           </div>
           <div className="text-[1.125rem]" >Aa</div> 

        </div>
       </section>
        <div className="h-px w-full my-3  bg-[color:var(--background-third)] "/>
       <section>
       <h3 className=" text-[18px] mb-2 leading-6 font-bold" >Renkler</h3>
        <div className="py-2 flex justify-around items-center " >
            {colors.map((c,index)=>(
                <button key={index} 
                onClick={()=>{
                    setColor({
                        ...color,
                       ...c
                    })
                }}
                style={{'--bg': c.primary}}
                className="h-[45px] w-[45px] rounded-full bg-[color:var(--bg)]  flex items-center justify-center text-white "
                >
                    {color.primary == c.primary && (
                        <svg viewBox="0 0 24 24" width={25} >
                        <path
                        fill="currentColor"
                        d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"/>

                        </svg>
                        
                    )}

                </button>
            ))}

        </div>
       </section>
        <section>
        <div>
        <div className="h-px w-full my-3  bg-[color:var(--background-third)] "/>
          <h3 className=" text-[1.125rem] mb-2 leading-6 font-bold" >Arka plan</h3>
          <div className="py-2 px-3  mb-3 gap-2 grid grid-cols-3  ">
            <button 
            onClick={()=>{
                setBackgroundColor({
                    name:'light',
                    primary:'#fff',
                    third:'#E7E7E8', //genel hover
                    fourth:'#00000008'
                }),
                setColor({
                   
                    ...color,
                    base:'#0f1419',    // yazı rengi 
                     baseSecondary:'#536471'

                }),
                setBorder({
                    borderBase:'#EFF3F4'

                }),
               setShadow('rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px')
              
            }}
           
             className={classNames("h-[64px] pr-3 pl-2 px-5   bg-white text-[#0f1419] border flex items-center gap-1  border-white/10 font-bold rounded group",{
                  '!border-[color:var(--color-primary)] !border-2 ':backgroundColor.name=='light'
            })}
            >
                 <div className="w-[40px] h-[40px] rounded-full flex items-center  justify-center flex-shrink-0 group-hover:bg-black/10">
                 <div className={classNames("w-[20px] h-[20px] rounded-full flex items-center justify-center border-2 border-[#EFF3F4]  ",{
                    '!border-[color:var(--color-primary)] !border-2 !bg-[color:var(--color-primary)] text-[#ffffff] ' :backgroundColor.name=='light'
                 })} > 
                 {backgroundColor.name=='light' && (
                    <svg viewBox="0 0 24 24">
                    <path
                    fill="currentColor"
                     d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"/></svg>
                 )}
                 </div>
                 </div>
                

               

                  

                Varsayılan

               
            </button>

            <button
             onClick={()=>{
                setBackgroundColor({
                    name:'darklight',
                    primary:'#15202b',
                    third:'#f9f7f71a', //genel hover
                  fourth:'#ffffff08'
                }),
                setColor({
                   
                    ...color,
                    base:'#e7e9ea',    // yazı rengi 
                    baseSecondary:'#8b98a5'

                }),
                setBorder({
                    borderBase:'#38444d'

                }),
                setShadow('rgba(136, 153, 166, 0.2) 0px 0px 15px, rgba(136, 153, 166, 0.15) 0px 0px 3px 1px')
            }}
            
            className={classNames(" h-[64px] bg-[#15202b] px-5  border border-white/10 flex items-center gap-1  text-[#f7f9f9] font-bold rounded group ",{
                '!border-[color:var(--color-primary)] !border-2 ':backgroundColor.name=='darklight'
          })}>
               <div className="w-[40px] h-[40px] rounded-full flex items-center  justify-center flex-shrink-0 group-hover:bg-white/10">
                 <div className={classNames("w-[20px] h-[20px] rounded-full flex items-center justify-center border-2 border-[#38444d]  ",{
                    '!border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] !border-2  text-[#e7e9ea] ' :backgroundColor.name=='darklight'
                 })} > 
                 {backgroundColor.name=='darklight' && (
                    <svg viewBox="0 0 24 24">
                    <path
                    fill="currentColor"
                     d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"/></svg>
                 )}
                 </div>
                 </div>
                
              Loş
            </button>
            <button
            onClick={()=>{
                setBackgroundColor({
                    name:'dark',
                    primary:'#000',
                     third:'#eff3f41a', //genel hover
                    fourth:'#ffffff08'
                }),
                setColor({
                  
                   ...color,
                    base:'#e7e9ea',
                    baseSecondary:'#71767b'
                }),
                setBorder({
                    borderBase:'#333639'

                }),
                setShadow('rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px')
               
            }}
             className={classNames("  h-[64px] bg-black pr-3 pl-2  flex-shrink-0  border border-white/10  font-bold flex items-center justify-center gap-1 text-[#e7e9ea] rounded group truncate ",{
                '!border-[color:var(--color-primary)] !border-2':backgroundColor.name=='dark'
          })}>
            <div className="w-[40px] h-[40px] rounded-full flex items-center  justify-center flex-shrink-0 group-hover:bg-white/10">
                 <div className={classNames("w-[20px] h-[20px] rounded-full flex items-center justify-center border-2 border-[#333639]  ",{
                    '!border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] !border-2  text-[#e7e9ea] ' :backgroundColor.name=='dark'
                 })} > 
                 {backgroundColor.name=='dark' && (
                    <svg viewBox="0 0 24 24">
                    <path
                    fill="currentColor"
                     d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"/></svg>
                 )}
                 </div>
                 </div>
              Işıklar kapalı
            </button>

          </div>
          <div className="flex items-center justify-center" >
            <Button
            variant="primary"
            onClick={close} >
                Bitti
            </Button>
          </div>
        </div>
        </section>

      </div>
     
       
       </div>
        </div>
    )
}