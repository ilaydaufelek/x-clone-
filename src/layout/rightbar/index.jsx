import Footer from "./footer";
import Premium from "./premium";
import Search from "./search";
import ShouldFollow from "./should-follow";
import Topics from "./topics";

export default function RightBar(){
    return(
        <aside className="w-[350px] mr-2.5 " >
           <Search />
           <Premium/>
           <Topics/>
           <ShouldFollow/>
           <Footer/>
        </aside>
    )
}