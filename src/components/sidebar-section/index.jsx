import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SidebarSection({title,children,more=false}){
    return( 
        <section className="bg-[color:var(--bakcground-primary)] border border-[color:var(--border-base)] py-2   mb-4 rounded-2xl  overflow-visible  ">
        <h5 className="py-3 px-4 text-lg font-extrabold flex items-center text-[color:var(--color-base)] ">
       {title}
        </h5>
        <div className="grid" >
            {children}
        </div>
        { more && (
            <Link 
            to={more}
            className="py-4 px-4 text-base text-[color:var(--color-primary)] w-full transition-colors "
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