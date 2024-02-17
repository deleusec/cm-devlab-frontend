interface FormButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    width?: string;
    color?: string;
}

function FormButton(props : FormButtonProps) {
    return ( 
        <button {...props} type="submit" className={`${props.width === "full" && "w-full"} ${props.color === "red" ? "bg-red-700 border-red-700 hover:bg-white hover:text-red-700 active:bg-red-700 active:text-white text-white" : "bg-secondary border-secondary hover:bg-white hover:text-secondary active:bg-secondary active:text-white text-white"}  border px-4 py-2 rounded-md duration-150`}>{ props.children}</button>
     );
}

export default FormButton;