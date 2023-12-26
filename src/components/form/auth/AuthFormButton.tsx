interface AuthFormButtonProps {
    text: string;
    type: "submit" | "button";
    theme: "dark" | "light";
}

AuthFormButton.defaultProps = {
    type: "submit",
    theme: "light"
}

function AuthFormButton(props: AuthFormButtonProps) {
    return ( 
        <button type={props.type} className={`p-4 rounded-md duration-150 border-2 border-secondary ${props.theme === "light" ? "bg-white hover:bg-secondary text-secondary hover:text-white" : "bg-secondary hover:bg-white hover:text-secondary text-white"}`}>
            {props.text}
        </button>
     );
}

export default AuthFormButton;