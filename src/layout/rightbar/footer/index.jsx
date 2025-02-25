import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <footer className=" px-4 flex flex-wrap gap-2" >
            <Link to='/' className="text-[#71767b] text-[12px] leading-[14px] hover:underline ">Hizmet Şartları</Link>
            <Link to='/' className="text-[#71767b] text-[12px] leading-[14px] hover:underline ">Gizlilik Politikası</Link>
            <Link to='/' className="text-[#71767b] text-[12px] leading-[14px] hover:underline ">Çerez Politikası</Link>
            <Link to='/' className="text-[#71767b] text-[12px] leading-[14px] hover:underline ">Imprint</Link>
            <Link to='/' className="text-[#71767b] text-[12px] leading-[14px] hover:underline ">Erişilebilirlik</Link>
            <Link to='/' className="text-[#71767b] text-[12px] leading-[14px] hover:underline ">Reklam bilgisi</Link>
         <div  >
         <Popover className="relative leading-[14px]" >
            <PopoverButton
             className="text-[#71767b]  outline-none text-[12px] inline-flex items-center leading-[14px] hover:underline " >
                Daha fazla
                <svg viewBox="0 0 24 24" className="h-[1em] px-0.5" >
                <path
                fill="currentColor"
                 d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                </svg>

            </PopoverButton>
            <PopoverPanel  className="absolute bottom-0   flex flex-col bg-black shadow-box-shadow w-[164.73px] right-0  overflow-hidden rounded-xl " > 
               <Link to="/" className="px-4 py-3 text-[14px] font-bold transition-colors leading-5  hover:bg-[#16181ccc] " >Hakkında</Link>  
               <Link to="/" className="px-4 py-3 text-[13.75px]  font-bold transition-colors leading-5  hover:bg-[#16181ccc] " >X uygulamasını indir</Link>  
               <Link to="/" className="px-4 py-3 text-[14px] font-bold transition-colors leading-5  hover:bg-[#16181ccc] " >İşletmeler İçin X</Link>  
               <Link to="/" className="px-4 py-3 text-[14px] font-bold transition-colors leading-5  hover:bg-[#16181ccc] " >Geliştiriciler</Link>  

            </PopoverPanel>
          </Popover>
         </div> 
         <span className=" w-full text-[#71767b] text-[12px] leading-[14px]" >© 2025 İlayda Üfelek </span>

        </footer>
    )
}