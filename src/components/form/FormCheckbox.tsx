import { CheckIcon } from "@heroicons/react/24/outline";

interface FormCheckboxProps {
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    checked: boolean;
    id: string;
    name: string;
}

function FormCheckbox(props: FormCheckboxProps) {
    return ( 
        <div className={`w-5 h-5 border border-secondary rounded-md cursor-pointer mr-2.5 ${props.checked && 'bg-secondary'} duration-150`}>
            <CheckIcon className={`w-full text-white `}/>
        </div>
     );
}

export default FormCheckbox;