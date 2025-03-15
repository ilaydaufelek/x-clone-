import { createSlice } from "@reduxjs/toolkit";

const initialState={
  // backgroundColor:{
  //  primary:'#000',
  // third:'#16181C',
  // fourth:'#ffffff08'
 

  // },
  // color:{
  //  primary:'#1d9bf0',
  //  secondary:'#8ecdf8',
  // base:'#e7e9ea',
  // baseSecondary:'#71767b'

  // },
  
  // fontSize:16,
  // border:{
  //   borderBase:'#333639' 
  //  },
  // boxShadow:'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px'

//lacivert
  // backgroundColor:{
  //   primary:'#15202b',
  //   third:'#f9f7f71a', //genel hover
  //   fourth:'#ffffff08'//rigtbar hover
    

    

 
  //  },
  //  color:{
  //   primary:'#1d9bf0',
  //   secondary:'#8ecdf8',
  // base:'#e7e9ea',    // yazı rengi 
  // baseSecondary:'#8b98a5' 
   
  //  },
   
  //  fontSize:16
  // border:{
  //   borderBase:'#38444d' 
  //  },
  // boxShadow:'  rgba(136, 153, 166, 0.2) 0px 0px 15px, rgba(136, 153, 166, 0.15) 0px 0px 3px 1px'

  //beyaz

  backgroundColor:{
    primary:'#fff',
    third:'#E7E7E8', //genel hover
    fourth:'#00000008'//rigtbar hover
    

    

 
   },
   color:{
    primary:'#1d9bf0',
    secondary:'#8ecdf8',
    third:'#1d9bf01a',
     base:'#0f1419',    // yazı rengi 
    baseSecondary:'#536471' 
   
   },
   
   fontSize:16,
   border:{
    borderBase:'#EFF3F4' 
   },
   boxShadow:'rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px',
  


}
const appearance=createSlice({
    name:'appearance',
    initialState,
    reducers:{
     _setBackgroundColor:(state,action)=>{
        state.backgroundColor=action.payload
     },
     _setColor:(state,action)=>{
       state.color=action.payload
       
     },
     _setFontSize:(state,action)=>{
      state.fontSize=action.payload
     },
     _setBorder:(state,action)=>{
      state.border=action.payload
     },
     _setShadow:(state,action)=>{
      state.boxShadow=action.payload
     },
     
    
    }
})
export const { _setBackgroundColor,_setColor,_setFontSize,_setBorder,_setShadow, }= appearance.actions
export default appearance.reducer