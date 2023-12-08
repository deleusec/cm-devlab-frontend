
interface ButtonAppProps {
    children?: React.ReactNode;
    theme?: "dark" | "light";
    text: string;
    onClick?: () => void;
}

ButtonApp.defaultProps = {
    theme: "light",
    text: "Click me !"
}

function ButtonApp(props: ButtonAppProps) {
    return (
        <button onClick={props.onClick} className={`flex items-center gap-1 px-3 h-8 rounded-full border duration-200 ${props.theme === "dark" ? "bg-secondary text-white hover:bg-transparent hover:text-secondary hover:border-secondary": "border-secondary text-secondary hover:bg-secondary hover:text-white hover:border-transparent"}`}>
            {props.children}
            <span className={`text-sm font-semibold`}>
                {props.text}
            </span>
        </button>
    );
}

export default ButtonApp;