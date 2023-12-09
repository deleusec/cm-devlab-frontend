interface FormButtonProps {
    text: string;
    type: "submit" | "button";
}

FormButton.defaultProps = {
    type: "submit"
}

function FormButton(props: FormButtonProps) {
    return ( 
        <button type={props.type} className="border-2 border-secondary bg-secondary hover:bg-white hover:text-secondary text-white p-4 rounded-md duration-200">
            {props.text}
        </button>
     );
}

export default FormButton;