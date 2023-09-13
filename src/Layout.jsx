import Navbar from "./Nav.jsx"


const Layout = ({children}) => {

    return (
        <div className="w-screen">
            <Navbar />
            {children}
        </div>
    )

}

export default Layout;