import { useState } from "react"
import Post from "../../../components/post"
import { posts as mockPosts } from "../../../mock/posts"
import NewPost from "./new-post"
import PostsList from "./new-post/postList"
import { VList } from "virtua";
import { useEffect } from "react"
export default function ForYou(){
    const [posts, setPosts] = useState(mockPosts) 
    
   const [postList,setPostList]=useState(JSON.parse(localStorage.getItem('posts')) || [] )
   useEffect(() => {
    try {
        localStorage.setItem("posts", JSON.stringify(postList));
      } catch (error) {
        console.error("localStorage error:", error);
      }
    }, [postList]);
  

    return(
       <>
       <NewPost setPostList={setPostList} />
       <PostsList postList={postList} setPostList={setPostList} />
       {posts.map(post => (
           <Post 
               key={post.id} 
               post={post}
               setPost={setPosts}  
               topicList={posts} 
               
           />
       ))}
       </>
    )
}