import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { mainMenu } from "../../../uilts/consts";
import More from "./more";
import New from "./new";
import { useAccount } from "../../../store/auth/hooks";
export default function Menu(){
    const account= useAccount()
    return(
        <nav className="mt-0.5 mb-1" key={account} >
         {mainMenu.map((menu,index)=>(
           <NavLink to={typeof menu.path == 'function' ? menu.path(): menu.path } key={index} className="py-[2px] block group text-[color:var(--color-base)] " >
           {({ isActive})=>(
              <div  className={classNames("p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[color:var(--background-third)] ",{
                "font-bold":isActive
            })}>
           <div className="w-[26.25px] h-[26.25px] relative">
           { menu.notification && 
            <span className="absolute w-[15px] h-[15px] rounded-full bg-[color:var(--color-primary)] -top-1 -right-1 text-[color:var(--color-base)] flex items-center justify-center text-[10px] ">{menu?.notification}</span>
            } 
            {menu.unread && 
            <span className="absolute w-[6px] h-[6px] rounded-full bg-[color:var(--color-primary)] flex items-center justify-center -top-1 right-px " >{ menu?.unread}</span>
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
         
         <New/>
     
        </nav>
        
       
    )
}