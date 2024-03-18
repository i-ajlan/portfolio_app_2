import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
      <div className='grid grid-rows-[70px_1fr_50px] 
        align-center
        gap-4 bg-slate-300 dark:bg-slate-900 h-screen'>
        <Header />
       
        <Outlet /> 

        <Footer/>
      </div>  
  )
}

export default Layout