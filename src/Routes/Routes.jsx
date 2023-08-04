import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Video from "../Pages/Video/Video";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:'/videos/:videoId',
                element:<Video/>
            }
        ]
    }
]);


export default router;