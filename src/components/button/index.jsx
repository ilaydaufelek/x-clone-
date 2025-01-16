import { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
 
export default function Button({size, children}){
    return createElement('button',{
        className :classNames("rounded-full bg-[#1d9bf0] item-center justify-center",{
            'px-4 h-8 bg-[#1d9bf0]':size =='normal',
            'px-4 h-12 w-full bg-[#eff3f4] hover:bg-[#D7DBDC] font-bold  text-[#292c32] ':size=='large'

        })
            
       
    },children)
   
}

Button.propTypes={
size:PropTypes.oneOf(['normal','large'])
}

Button.defaultProps={
size: 'normal'
}