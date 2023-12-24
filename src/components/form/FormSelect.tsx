interface FormSelectProps {
    options: string[];
    name?: string;
    id?: string;
    value?: string;
    defaultEmpty?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function FormSelect(props: FormSelectProps) {
    return ( 
        <>
            <select id={props.id} name={props.name} value={props.value} onChange={props.onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-secondary focus:border-secondary block w-full p-2.5 capitalize">
                {props.defaultEmpty && <option value="">-- Choisir --</option>}
                {props.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </>
     );
}

export default FormSelect;