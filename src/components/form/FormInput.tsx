interface FormInputProps {
    placeholder: string;
    type?: "text" | "password" | "email" | "number";
}

FormInput.defaultProps = {
    type: "text"
}

function FormInput(props: FormInputProps) {
    return ( 
        <>
            <input type={props.type} placeholder={props.placeholder} className="w-full p-4 outline outline-2 rounded-md outline-secondary" />
        </>
     );
}

export default FormInput;