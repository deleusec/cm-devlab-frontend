interface FormButtonProps {
    text: string;
    type: "submit" | "button";
    theme: "dark" | "light";
}

FormButton.defaultProps = {
    type: "submit",
    theme: "light"
}

function FormButton(props: FormButtonProps) {
    return ( 
        <button type={props.type} className={`p-4 rounded-md duration-200 border-2 border-secondary ${props.theme === "light" ? "bg-white hover:bg-secondary text-secondary hover:text-white" : "bg-secondary hover:bg-white hover:text-secondary text-white"}`}>
            {props.text}
        </button>
     );
}

export default FormButton;