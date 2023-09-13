const Navbar = () => {

    return (
        <nav className="w-full flex justify-end space-x-4 bg-white mr-4 px-8 py-2">
            {[
                ['Home', '/'],
                ['Owner', '/owner'],
            ].map(([title, url]) => (
                <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
            ))}
        </nav>

    )
}

export default Navbar;