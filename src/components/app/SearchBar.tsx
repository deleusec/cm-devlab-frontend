import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { Agent } from "@/types/Agent";
import { useNavigate } from "react-router-dom";
function SearchBar() {
    const [isFocused, setIsFocused] = useState(false);
    const [search, setSearch] = useState('');
    const [agents, setAgents] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleFocus = () => {
        setIsFocused(!isFocused);
        if ( !isFocused ) {
            setIsDropdownOpen(true);
        }
    }

    useEffect(() => {
        if (search.length > 0) {
            research(search);
            setIsDropdownOpen(true);
        } else {
            setAgents([]);
        }
    }, [search]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent ) => {
            if ((event.target as HTMLInputElement)?.id !== 'searchbar') {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);

    const research = async (search: string) => {
        const agents = await axios.get(`http://localhost:3011/agents`).then(res => res.data).catch(err => console.log(err));
        const filteredAgents = agents.filter((agent: Agent) => {
            const fullName = `${agent.firstname} ${agent.lastname}`;
            return fullName.toLowerCase().includes(search.toLowerCase());
        });
        setAgents(filteredAgents);
    }

    const navigate = useNavigate();
    const redirect = (id: number) => {
        navigate(`/agents/${id}`);
    }
    return (
        <div className="relative w-full max-w-[600px]">
            <div className={`flex h-10 rounded-full bg-gray-light w-full ${isFocused && 'outline outline-2 outline-secondary'}`}>
                <input id="searchbar" type="search" placeholder="Recherche"
                    className="bg-transparent border-0 focus-visible:outline-0 flex h-full w-full px-6"
                    onFocus={handleFocus} onBlur={handleFocus} onChange={(e) => setSearch(e.target.value)} value={search}
                     />
                <label htmlFor="searchbar" className="flex items-center h-full pr-4 cursor-pointer text-secondary">
                    <MagnifyingGlassIcon className="w-5 stroke-2" />
                </label>
            </div>
            {isDropdownOpen && (
            <div className="absolute w-full top-full bg-white left-1/2 -translate-x-1/2 z-50">
                <ul>
                    {agents.map((agent: Agent) => (
                        <li key={agent.id} className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer" onClick={()=>redirect(agent.id)}>
                            <div className="ml-4">
                                <p>{agent.firstname} {agent.lastname}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>)}
        </div>

    );
}

export default SearchBar;