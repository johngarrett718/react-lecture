import { Nav } from './modules/nav'
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
   <>
    <Nav />
    <Outlet />
   </>    
  )
}