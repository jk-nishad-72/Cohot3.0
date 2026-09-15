import Chats from "../../features/Chats/ui/pages/Chats";
import Home from "../../features/Dashboard/ui/pages/Home";
import Settings from "../../features/Settings/ui/pages/Settings";


export const commerRoutes = [

    {
        path:"",
        element:<Home />
    },
    
    {
        path:"settings",
        element:<Settings />
    },
      {
        path:"chats",
        element:<Chats />
    },
    
]