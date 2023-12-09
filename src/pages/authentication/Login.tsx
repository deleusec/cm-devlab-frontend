import FormButton from "@/components/form/FormButton";
import FormInput from "@/components/form/FormInput";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="w-full h-[100vh] bg-light-gray flex flex-col justify-center items-center gap-10">
            <div className="font-bold text-secondary text-6xl">Bridge</div>
            <div className="flex flex-col gap-8 w-full max-w-[400px]">
                <h1>Se connecter</h1>
                <FormInput type="email" placeholder="email" />
                <FormInput type="password" placeholder="password" />
                <FormButton text="Se connecter" />      
                <Link to={"/forgot-password"} className="text-center text-secondary font-semibold">Mot de passe oublié ?</Link>
            </div>
        </div>
    );
}

export default Login;