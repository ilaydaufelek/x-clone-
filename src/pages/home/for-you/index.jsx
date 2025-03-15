import { useState } from "react"
import Post from "../../../components/post"
import { posts as mockPosts } from "../../../mock/posts"
import NewPost from "./new-post"
import PostsList from "./new-post/postList"
import { VList } from "virtua";
export default function ForYou(){
    const [posts, setPosts] = useState(mockPosts) 
   
    return(
       <>
       <NewPost />
       <PostsList/>
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