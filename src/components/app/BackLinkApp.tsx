import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function BackLinkApp() {
    const navigate = useNavigate();
    
    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        navigate(-1);
    }

    return ( 
        <div onClick={handleClick} className="w-fit cursor-pointer text-secondary hover:underline duration-200">
            <ArrowLeftIcon className="w-3 stroke-2 mr-2 inline-block"/>
            <span className="text-sm font-medium">Retour</span>
        </div>
     );
}

export default BackLinkApp;