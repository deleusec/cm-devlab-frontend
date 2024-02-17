import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { BellIcon } from "@heroicons/react/24/outline";

function Header() {
    return (
        <header className="w-full min-h-header px-[30px] grid grid-cols-5 items-center">
            <div className="col-span-1 text-3xl font-bold text-secondary"><Link to={"/"}>Bridge</Link></div>
            <div className="col-span-3 flex justify-center">
                <SearchBar />
            </div>
            <div className="col-span-1 justify-self-end">
                <BellIcon className="w-6 stroke-2 text-secondary" />
            </div>
        </header>
    );
}

export default Header;