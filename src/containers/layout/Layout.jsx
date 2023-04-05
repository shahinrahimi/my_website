import './layout.css'
import { Outlet } from "react-router-dom"
import { Clock } from "../../components"
import { Navbar } from "../../containers"

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Clock />
    </div>
  )
}
export default Layout