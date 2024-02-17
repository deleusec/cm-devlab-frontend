
interface ButtonAppProps {
    children?: React.ReactNode;
    theme?: "dark" | "light";
    active: boolean;
    text: string;
    onClick?: () => void;
}

ButtonApp.defaultProps = {
    theme: "light",
    text: "Click me !",
    active: false
}

function ButtonApp(props: ButtonAppProps) {
    return (
        <button onClick={props.onClick} className={`flex items-center gap-1 px-3 h-8 rounded-full border border-secondary duration-150 ${props.theme === "light" && props.active ? "bg-secondary text-white" : ""} ${props.theme === "dark" && !props.active ? "bg-secondary text-white hover:bg-transparent hover:text-secondary hover:border-secondary" : ""} ${props.theme === "dark" && props.active ? "border-secondary text-secondary" : "" } ${props.theme === "light" && !props.active ? "text-secondary hover:bg-secondary hover:text-white" : ""}`}>
            {props.children}
            <span className={`text-sm font-semibold`}>
                {props.text}
            </span>
        </button>
    );
}

export default ButtonApp;