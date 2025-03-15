import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    posts: [],
  };
  
  const newPost = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      addPost: (state, action) => {
        state.posts.unshift(action.payload); 
      },
      deletePost: (state, action) => {
    
        state.posts = state.posts.filter(post => post.id !== action.payload); 
    
       
    }
    
    },
  });
  
  export const { addPost, deletePost } = newPost.actions;
  export default newPost.reducer;