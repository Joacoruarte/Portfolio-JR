import NavBar from "./Navbar";
import { useEffect } from "react"; 
import { useRouter } from "next/router"; 
import NProgress from "nprogress";
const Layout = ({ children , footer = true , dark = false }) => {

  const router = useRouter()
 
  useEffect(() => {
    
    const handleRouteChange = url => {
      console.log(url)
      NProgress.start()
    }

    router.events.on("routeChangeStart", handleRouteChange)
    
    router.events.on("routeChangeComplete", () => NProgress.done())

    return () => { 
      router.events.off("routeChangeStart", handleRouteChange)
    }

  }, [])
  

  return ( 
    <div id="back" className={dark ? "bg-dark" : ""}>
    <NavBar />
    <main className="container py-5">
        {children}
    </main> 
    {footer&&  
      <footer className="bg-dark text-light text-center"> 
        <div className="cotnainer p-4">
          <h1>&copy; Joaquin Ruarte Portfolio</h1> 
          <p>2022 - {new Date().getFullYear()}</p> 
          <p>All rights Reserved.</p>
        </div>
      </footer>
    } 
  </div>
  )
}


export default Layout;
