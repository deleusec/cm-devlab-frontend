import SearchBar from "../SearchBar";

function Header() {
    return (
        <header className="w-full min-h-header px-[30px] grid grid-cols-5 items-center">
            <div className="col-span-1 text-3xl font-bold text-secondary">Bridge</div>
            <div className="col-span-3 flex justify-center">
                <SearchBar />
            </div>
            <div className="col-span-1"></div>
        </header>
    );
}

export default Header;