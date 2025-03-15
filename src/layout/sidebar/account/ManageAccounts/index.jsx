import classNames from "classnames"
import { useAccount, useAccounts } from "../../../../store/auth/hooks"
import { setCurrentAccount } from "../../../../store/auth/actions"
export default function ManageAccounts({close}){
    const accounts= useAccounts()
    const currentAccount=useAccount()
    return(
        <div className=" " > 
          {accounts.map(account=>(
            <button
            type="button"
            disabled={currentAccount.id == account.id}
            onClick={()=>{
              setCurrentAccount(account)
              close()
            }}
           
             className={classNames("py-3 px-4 flex items-center  text-left w-full transition-colors",{
                "hover:bg-[color:var(--background-third)]":currentAccount.id !== account.id
            })}>
              
          <img src={account.avatar} alt="" className="rounded-full w-10 h-10" />
        <div>
        <div className="mx-3 text-[0.938rem]">
          <h6 className="font-bold leading-[20px] ">  {account.fullName}</h6>
          <div className="text-[color:var(--color-baseSecondary)] ">
            @{account.userName}
            </div>
          </div>
        </div>
        {currentAccount.id == account.id && (
            <svg className="ml-auto" viewBox="0 0 24 24" width={17.5} height={17.5} fill="#00ba7c" >
            <path
            
            d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"/>
            </svg>
        )}
            </button>
          ))}
          <div className="h-px bg-[color:var(--border-base)] w-full my-3 "/>
         <button className="py-3 px-4 text-left  font-bold hover:bg-[color:var(--background-third)] w-full " >
         Var olan bir hesap ekle
         </button>
         <button className="py-3 px-4 text-left font-bold   hover:bg-[color:var(--background-third)] w-full " >
         Hesapları yönet
         </button>
         <button className="py-3 px-4 text-left  font-bold rounded-b-2xl hover:bg-[color:var(--background-third)] w-full " >
         @llaiseee hesabından çıkış yap
         </button>
        
        </div>
    )
}