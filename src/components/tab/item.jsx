import PropTypes from "prop-types"
import { useTab } from "./context"
import classNames from "classnames"

export default function Item ({children, id}){
    const {active,setActive}=useTab()
    return(
        <button
        type="button"
        onClick={()=>setActive(id)}
        className="flex-auto h-[3.313rem] text-center hover:bg-[color:var(--background-third)] "
        >
           <div className={classNames(" h-[3.313rem] inline-flex relative items-center  text-[color:var(--color-baseSecondary)] font-medium  text-[0.93rem]   " ,{
            '!font-bold  !text-[color:var(--color-base)] ':active=== id
           } )} >
           {children}
           {active===id && (
            <div className="absolute h-[4px] bottom-0 left-0 w-full rounded-full bg-[color:var(--color-primary)]  "/>
           )}
           </div>
        </button>
    )
}

Item.propTypes={
    children:PropTypes.oneOfType([PropTypes.string,PropTypes.node])  ,
    id:PropTypes.string
}