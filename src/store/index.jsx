import { configureStore } from "@reduxjs/toolkit";
import auth from './auth'
import modal from './modal'
import appearance from './appearance'
import newPost from './newPost'
const store=configureStore({
    reducer:{
       auth,
       modal,
       appearance,
       newPost
    }
})
export default store