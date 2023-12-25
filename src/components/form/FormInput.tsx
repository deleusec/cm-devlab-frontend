interface FormInputProps {
    placeholder?: string;
    type: "text" | "password" | "email" | "number" | "date" | "tel";
    name: string;
    id: string;
    value: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

FormInput.defaultProps = {
    type: "text",
}

function FormInput(props: FormInputProps) {
    return (
        <>
            <input type={props.type} name={props.name} id={props.id} value={props.value} onChange={props.onChange} placeholder={props.placeholder}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-secondary focus:border-secondary block w-full p-2.5"/>
        </>
    );
}

export default FormInput;