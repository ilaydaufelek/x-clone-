import { createSlice } from "@reduxjs/toolkit";

const initialState={
    CurrentAccount:{
       id:1,
       fullName:'İlayda🇹🇷',
       userName:'llasiee',
       avatar:'https://pbs.twimg.com/profile_images/1619801379412873219/sGo2GMQW_400x400.jpg'

    },
    accounts:[
      {
         id:1,
         fullName:'İlayda',
         userName:'llasiee',
         avatar:'https://pbs.twimg.com/profile_images/1619801379412873219/sGo2GMQW_400x400.jpg'
      },
      {
         id:2,
         fullName:'deneme2',
         userName:'dneme',
         avatar:'https://i.pinimg.com/736x/b4/8c/fd/b48cfd5f84af8fb4f79ec4f0e4e5495e.jpg'
      }
      
    ]
}
const auth=createSlice({
    name:'auth',
    initialState,
    reducers:{
     _addAccount:(state,action)=>{
        state.accounts.push(action.payload)
     },
     _removeAccount:(state,action)=>{
        state.accounts=state.accounts.filter(account=>account.id !==action.payload)
        if(state.CurrentAccount && state.CurrentAccount==action.payload){
            state.CurrentAccount=false
        }
     },
     _setCurrentAccount:(state,action)=>{
        state.CurrentAccount = action.payload
     }
     
    }
})
export const { _addAccount, _removeAccount, _setCurrentAccount }= auth.actions
export default auth.reducer