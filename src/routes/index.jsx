import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explore";
import MainLayout from "../layout/main";
import Notifications from "../pages/notifications";
import Messages from "../pages/messages/messages";
import Grok from "../pages/grok/grok";
import List from "../pages/list";
import Bookmarks from "../pages/bookmarks";
import Jobs from "../pages/jobs";
import Communities from "../pages/communities";
import Profile from "../pages/profile/profile";


const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
       
        children:[
        {
            index:true,
            element:<Home/>
        },
         {
            path:'explore',
            element:<Explore/>

         },
         {
            path:'notifications',
            element:<Notifications/>
         },
         {
            path:'messages',
            element:<Messages/>
         },
         {
            path:'grok',
            element:<Grok/>
         },
         {
           path:'lists',
           element:<List/>
         },
         {
            path:'bookmarks',
            element:<Bookmarks/>
         },
         {
            path:'communities',
            element:<Communities/>
         },
         
         {
            path:'profile',
            element:<Profile/>
         }
         
    ]
    }
    ,
    {
      path:'/jobs',
      element:<Jobs/>
    }
])
export default router