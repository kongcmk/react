const Navbar = () => {
    return (
        <nav className="flex items-center justify-end w-full px-8 py-2 mr-4 space-x-4 bg-white">
            {[
                ['Home', '/'],
                ['Owner', '/owner'],
            ].map(([title, url]) => (
                <a href={url} className="px-3 py-2 font-medium rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900">{title}</a>
            ))}
            <li><a href="/" className="px-3 py-2 font-medium rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900">Home</a></li>
            <li><a href="owner" className="px-3 py-2 font-medium rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900">Owner</a></li>
        </nav>
    )
}

export default Navbar;