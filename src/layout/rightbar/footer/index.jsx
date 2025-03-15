import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <footer className=" px-4 flex flex-wrap gap-2 text-[color:var(--color-baseSecondary)]" >
            <Link to='/' className=" text-[0.75rem] leading-[0.875rem] hover:underline ">Hizmet Şartları</Link>
            <Link to='/' className=" text-[0.75rem] leading-[0.875rem] hover:underline ">Gizlilik Politikası</Link>
            <Link to='/' className=" text-[0.75rem] leading-[0.875rem] hover:underline ">Çerez Politikası</Link>
            <Link to='/' className=" text-[0.75rem] leading-[0.875rem] hover:underline ">Imprint</Link>
            <Link to='/' className=" text-[0.75rem] leading-[0.875rem] hover:underline ">Erişilebilirlik</Link>
            <Link to='/' className=" text-[0.75rem] leading-[0.875rem] hover:underline ">Reklam bilgisi</Link>
         <div  >
         <Popover className="relative leading-[0.875rem]" >
            <PopoverButton
             className="text-[color:var(--color-baseSecondary)] outline-none text-[0.75rem] inline-flex items-center leading-[0.875rem] hover:underline " >
                Daha fazla
                <svg viewBox="0 0 24 24" className="h-[1em] px-0.5" >
                <path
                fill="currentColor"
                 d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                </svg>

            </PopoverButton>
            <PopoverPanel  className="absolute bottom-0   flex flex-col bg-[color:var(--background-primary)] text-[color:var(--color-base)]   shadow-box w-[164.73px] right-0  overflow-hidden rounded-xl " > 
               <Link to="/" className="px-4 py-3 text-[0.875rem] font-bold transition-colors leading-5 hover:bg-[color:var(--background-fourth)]  " >Hakkında</Link>  
               <Link to="/" className="px-4 py-3 text-[0.875rem]  font-bold transition-colors leading-5  hover:bg-[color:var(--background-fourth)] " >X uygulamasını indir</Link>  
               <Link to="/" className="px-4 py-3 text-[0.875rem] font-bold transition-colors leading-5 hover:bg-[color:var(--background-fourth)]  " >İşletmeler İçin X</Link>  
               <Link to="/" className="px-4 py-3 text-[0.875rem] font-bold transition-colors leading-5  hover:bg-[color:var(--background-fourth)] " >Geliştiriciler</Link>  

            </PopoverPanel>
          </Popover>
         </div> 
         <span className=" w-full text-[color:var(--color-baseSecondary)] text-[0.75rem] leading-[0.875rem]" >© 2025 İlayda Üfelek </span>

        </footer>
    )
}