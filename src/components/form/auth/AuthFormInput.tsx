interface AuthFormInputProps {
    placeholder: string;
    type?: "text" | "password" | "email" | "number";
    name?: string;
    id?: string;
}

AuthFormInput.defaultProps = {
    type: "text"
}

function AuthFormInput(props: AuthFormInputProps) {
    return ( 
        <>
            <input type={props.type} placeholder={props.placeholder} className="w-full p-4 outline outline-2 rounded-md outline-secondary" />
        </>
     );
}

export default AuthFormInput;