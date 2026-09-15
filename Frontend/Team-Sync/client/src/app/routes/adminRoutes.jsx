import Departments from "../../features/Admin modules/Departements/ui/pages/Departments";
import Documents from "../../features/Admin modules/Documents/ui/pages/Documents";
import Employees from "../../features/Admin modules/Employees/ui/pages/Employees";
import Tasks from "../../features/Admin modules/Tasks/ui/pages/Tasks";


export const adminRoutes = [
     {
        path:"/home/department",
        element:<Departments />
     },
       {
        path:"/home/employees",
        element:<Employees />
     },
       {
        path:"/home/tasks",
        element:<Tasks />
     },
      {
        path:"/home/documents",
        element:<Documents />
     }

]