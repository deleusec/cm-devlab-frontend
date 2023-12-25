interface FormTextAreaProps {
    placeholder?: string;
    name?: string;
    id?: string;
    value?: string;
    rows?: number;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function FormTextArea(props: FormTextAreaProps) {
    return ( 
        <>
            <textarea rows={props.rows} id={props.id} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-secondary focus:border-secondary block w-full p-2.5 resize-none" />
        </>
     );
}

export default FormTextArea;