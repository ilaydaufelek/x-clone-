import { Link } from "react-router-dom";

export default function Jobs(){
    return(
        <div className="h-screen flex justify-center ">
        <div className="max-w-[1280px] w-full h-[90px] flex items-center ">
        <div className="w-[202px] h-[34px]  mx-2  ">
        
            <Link to={'/'} className="w-[32px] h-[32px]  rounded-full flex items-center justify-center hover:bg-[#181919]  transition   " >
            <svg viewBox="0 0 24 24" width={27} height={27}  >
            <path 
            fill="#fff"
             d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
            </Link>
       
        </div>
        </div>
      </div>
      
    )
}