import { Outlet } from "react-router-dom";
import SideBar from "../sidebar";
import RightBar from "../rightbar";
import { useModal } from "../../store/modal/hooks";
import Modal from "../../modals";
import { useEffect } from "react";
import { useAppearance } from "../../store/appearance/hooks";



export default function MainLayout(){

   
    const modal=useModal()
    const appearance=useAppearance()

   useEffect(()=>{
    document.documentElement.style.setProperty('--background-primary', appearance.backgroundColor.primary)
    document.documentElement.style.setProperty('--background-third', appearance.backgroundColor.third)
    document.documentElement.style.setProperty('--background-fourth', appearance.backgroundColor.fourth)


    document.documentElement.style.setProperty('--color-primary', appearance.color.primary)
    document.documentElement.style.setProperty('--color-secondary', appearance.color.secondary)
    document.documentElement.style.setProperty('--color-third', appearance.color.third)
    document.documentElement.style.setProperty('--color-base', appearance.color.base)
    document.documentElement.style.setProperty('--color-baseSecondary', appearance.color.baseSecondary)



    document.documentElement.style.setProperty('--font-size', appearance.fontSize + 'px')
    document.documentElement.style.setProperty('--border-base', appearance.border.borderBase)
    document.documentElement.style.setProperty('--box-shadow', appearance.boxShadow)
   

 


console.log(appearance,'appearance');

   },[appearance])
    return(
        <div className="w-[1325px] mx-auto px-6 flex   ">
          {modal&& <Modal />}
            <SideBar />
            <main className="flex-1 flex gap-[30px] ">
            <main className= " flex-1 max-w-[600px]  border-x border-[color:var(--border-base)]">  
            <Outlet/>
            </main>
            <RightBar className="flex-shrink-0 h-screen max-h-screen overflow-auto" />
            </main>
          
        </div>
    )
}