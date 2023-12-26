interface FormButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function FormButton(props : FormButtonProps) {
    return ( 
        <button {...props} type="submit" className="bg-secondary border border-secondary hover:bg-white hover:text-secondary active:bg-secondary active:text-white text-white px-4 py-2 rounded-md duration-150">{ props.children}</button>
     );
}

export default FormButton;