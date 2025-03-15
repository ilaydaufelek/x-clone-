export default function Photo({photos}){
    console.log(photos);
    
    switch(photos.length){
        case 1:
            return(
               <div className="mt-3" >
                 <img src={photos[0]} alt="" className="border border-[color:var(--border-base)] rounded-2xl max-h-[510px] object-cover " />
               </div>
            )
           
        case 2:
           return(
            <div className="mt-3 grid grid-cols-2 gap-0.5 h-[288px] border border-[color:var(--border-base)] rounded-2xl overflow-hidden " >
            <img src={photos[0]} alt="" className=" h-full w-full object-cover " />
            <img src={photos[1]} alt="" className=" h-full object-cover " />
          </div>
           )
         
          case 3:
            break;
            case 4:  
    }
   

}