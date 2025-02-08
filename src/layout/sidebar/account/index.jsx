import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { useAccount } from "../../../store/auth/hooks"
import ManageAccounts from "./ManageAccounts"
export default function Account(){
  const  account=useAccount()
    return(
        <div className="mt-auto ">
       <Popover className="relative ">
        <PopoverButton className=" my-3 p-3 flex hover:bg-[#181818] w-full text-left items-center rounded-full outline-none    ">
        
          <img src={account.avatar} alt="" className="rounded-full w-10 h-10" />
        <div>
        <div className="mx-3 text-[15px]">
          <h6 className="font-bold leading-[20px]">  {account.fullName}</h6>
          <div className="text-[#71767b]  ">
            @{account.userName}
            </div>
          </div>
          
        
        </div>
        <svg viewBox="0 0 24 24" className="ml-auto" width={17.5} height={17.5}>
          <path 
          fill="#e7e9ea"
          d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
        </svg>
        </PopoverButton>
        <PopoverPanel className=" absolute bottom-full  left-1/2 -translate-x-1/2 w-[300px]  bg-black shadow-box-shadow rounded-2xl transition duration-300   ">
      {({close})=>(
          <ManageAccounts close={close} />
      )}
        </PopoverPanel>
       </Popover>
        </div>
    )
}