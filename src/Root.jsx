import { Outlet, useLocation } from "react-router-dom"
import Footer from "./pages/shared/Footer/Footer"
import Navbar from "./pages/shared/Navbar/Navbar"

const Root = () => {
  const location = useLocation()?.pathname;
  return (
    <div>
        {location.includes('login') || location.includes('signup') || <Navbar></Navbar>}
        <Outlet></Outlet>
        {location.includes('login') || location.includes('signup') || <Footer></Footer>}
    </div>
  )
}

export default Root