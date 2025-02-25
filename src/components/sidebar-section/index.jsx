import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SidebarSection({title,children,more=false}){
    return( 
        <section className="bg-black border border-[#2f3336] py-2   mb-4 rounded-2xl  overflow-visible  ">
        <h5 className="py-3 px-4 text-lg font-extrabold flex items-center text-[#e7e9ea] ">
       {title}
        </h5>
        <div className="grid" >
            {children}
        </div>
        { more && (
            <Link 
            to={more}
            className="py-4 px-4 text-base text-[#1d9bf0] w-full transition-colors "
            >
            Daha fazla göster
            </Link>
        )}
        </section>
    )
}

SidebarSection.propTypes={
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([PropTypes.bool,PropTypes.string])
    
}