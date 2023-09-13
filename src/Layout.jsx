import Navbar from "./Nav"


const Layout = ({children}) => {

    return (
        <div className="w-screen">
            <Navbar />
            {children}
        </div>
    )

}

export default Layout;