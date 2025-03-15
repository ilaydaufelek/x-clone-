import Footer from "./footer";
import Premium from "./premium";
import Search from "./search";
import ShouldFollow from "./should-follow";
import Topics from "./topics";

export default function RightBar(){
    return(
        <aside className="w-[350px] mr-2.5 max-h-screen z-[2] min-h-screen flex flex-col sticky top-0   " >
           <Search />
           <Premium/>
           <Topics/>
           <ShouldFollow/>
           <Footer/>
        </aside>
    )
}