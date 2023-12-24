import AuthFormButton from "@/components/form/auth/AuthFormButton";
import AuthFormInput from "@/components/form/auth/AuthFormInput";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="w-full h-[100vh] bg-light-gray flex flex-col justify-center items-center gap-10">
            <div className="font-bold text-secondary text-6xl">Bridge</div>
            <div className="flex flex-col gap-8 w-full max-w-[400px]">
                <h1>Se connecter</h1>
                <AuthFormInput type="email" placeholder="email" />
                <AuthFormInput type="password" placeholder="password" />
                <AuthFormButton text="Se connecter" theme="dark" />      
                <Link to={"/forgot-password"} className="text-center text-secondary font-semibold">Mot de passe oublié ?</Link>
            </div>
        </div>
    );
}

export default Login;