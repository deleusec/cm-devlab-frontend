interface FormLabelProps {
    for: string;
    title: string;
    children: React.ReactNode;
}

function FormLabel(props: FormLabelProps) {
    return ( 
        <label className="flex flex-col flex-1 min-w-[200px]" htmlFor={props.for}>
            <span className="mb-1 text-sm text-secondary font-normal text-gray-700 cursor-pointer w-fit">{props.title}</span>
            {props.children}
        </label>
     );
}

export default FormLabel;