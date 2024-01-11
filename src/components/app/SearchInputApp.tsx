import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface SearchInputAppProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

function SearchInputApp(props: SearchInputAppProps) {
    const [isFocused, setIsFocused] = useState(false);
    return ( 
        <div className={`flex rounded-full outline outline-1 w-full max-w-[300px] overflow-hidden px-2 ${isFocused ? "outline-secondary": "outline-gray-300"}`}>
            <MagnifyingGlassIcon className="right-3 top-3 w-5 text-gray-400" />
            <input type="text" placeholder="Rechercher" className="rounded-full text-sm p-2 focus:outline-none w-full" onFocus={()=>setIsFocused(true)} onBlur={()=>setIsFocused(false)} onChange={props.onChange} />
        </div>
     );
}

export default SearchInputApp;