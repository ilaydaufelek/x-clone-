import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { mainMenu } from "../../../uilts/consts";
import Button from "../../../components/button";
import More from "./more";

export default function Menu(){
    return(
        <nav className="mt-0.5 mb-1" >
         {mainMenu.map((menu,index)=>(
           <NavLink to={menu.path} className="py-[2px] block group" >
           {({ isActive})=>(
              <div className={classNames("p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#181818]",{
                "font-bold":isActive
            })}>
           <div className="w-[26.25px] h-[26.25px] relative">
           { menu.notification && 
            <span className="absolute w-[15px] h-[15px] rounded-full bg-[#1D9BF0] -top-1 -right-1 flex items-center justify-center text-[10px] ">{menu?.notification}</span>
            } 
            {menu.unread && 
            <span className="absolute w-[6px] h-[6px] rounded-full bg-[#1D9BF0] flex items-center justify-center -top-1 right-px " >{ menu?.unread}</span>
            }
           {!isActive && menu.icon.pasive}  
            {isActive && menu.icon.active}
           </div>
            
           <div className="pr-4 text-lg"  >
           {menu.title}
           </div>
            </div>  
           )
            
           }
          </NavLink>
         )
        
        )}

        <More/>

      <div className="w-[90%] py-4" >
      <Button size= 'large'>Gönder</Button>
      </div>
        </nav>
        
       
    )
}