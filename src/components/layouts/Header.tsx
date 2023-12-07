function Header() {
    return ( 
        <header className="w-full min-h-header">
            Header here !
            <nav>
                <ul className="flex gap-5">
                    <li><a className="hover:text-primary underline" href="/">Home</a></li>
                    <li><a className="hover:text-primary underline" href="/dashboard">Dashboard</a></li>
                </ul>
            </nav>
        </header>
     );
}

export default Header;