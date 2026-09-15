import Attendence from "../../features/Employee modules/Attendence/ui/pages/Attendence";
import MyTasks from "../../features/Employee modules/MyTasks/ui/pages/MyTasks";
import Profile from "../../features/Employee modules/Profile/ui/pages/Profile";

export const employeeRoutes = [
     {
        path:"/home/attendence",
        element:<Attendence />
     },
       {
        path:"/home/profile",
        element:<Profile />
     },
       {
        path:"/home/my-tasks",
        element:<MyTasks />
     },
]