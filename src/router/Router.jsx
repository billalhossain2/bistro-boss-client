import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Menu from "../pages/Menu/Menu";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Cart from "../pages/Cart/Cart";
import Dashboard from "../pages/Dashboard/Dashboard";
import User from "../pages/User/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/shop",
        element:<Shop></Shop>
      },
      {
        path:"/menu",
        element:<Menu></Menu>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/cart",
        element:<Cart></Cart>
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      },
      {
        path:"/user",
        element:<User></User>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
    ]
  },
]);

export default router;
