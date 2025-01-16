import Logo from "./logo";
import Menu from "./menu";

export default function SideBar(){
    return(
        <aside className="w-[275px] min-h-screen px-3 -inset-y-1">
          <Logo/>
          <Menu/>
        </aside>
    )
}