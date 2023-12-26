import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
function SearchBar() {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(!isFocused);
    }
    return (
        <div className={`flex h-10 rounded-full bg-light-gray w-full max-w-[600px] ${isFocused && 'outline outline-2 outline-secondary'}`}>
            <input autoComplete="off" id="search" className="bg-transparent border-0 focus-visible:outline-0 flex h-full w-full px-6" type="search" placeholder="Search" onFocus={handleFocus} onBlur={handleFocus} />
            <label htmlFor="search" className="flex items-center h-full pr-4 cursor-pointer text-secondary">
                <MagnifyingGlassIcon className="w-5 stroke-2" />
            </label>
        </div>
    );
}

export default SearchBar;