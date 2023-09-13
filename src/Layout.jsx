import Navbar from "./Nav.jsx"


const Layout = ({children}) => {

    return (
        <div className="">
            <Navbar />
            {children}
        </div>
    )

}

export default Layout;