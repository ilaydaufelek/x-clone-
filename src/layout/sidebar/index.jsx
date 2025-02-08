import Account from "./account";
import Logo from "./logo";
import Menu from "./menu";

export default function SideBar(){
    return(
        <aside className="w-[275px] min-h-screen ml-7 px-2 flex flex-col ">
          <Logo/>
          <Menu/>
           <Account/>
        </aside>
    )
}