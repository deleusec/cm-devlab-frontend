import { useState } from "react";
import Search from '@icons/search';
function SearchBar() {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(!isFocused);
    }
    return (
        <div className={`flex h-10 rounded-full bg-[#D9D9D9] w-full max-w-[600px] ${isFocused && 'border border-secondary'}`}>
            <input id="search" className="bg-transparent border-0 focus-visible:outline-0 flex h-full w-full px-6" type="text" placeholder="Search" onFocus={handleFocus} onBlur={handleFocus} />
            <label htmlFor="search" className="flex items-center h-full pr-4 cursor-pointer text-secondary">
                <Search />
            </label>
        </div>
    );
}

export default SearchBar;