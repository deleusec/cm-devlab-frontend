import FormInput from "@/components/form/FormInput";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="w-full h-[100vh] bg-light-gray flex flex-col justify-center items-center gap-10">
            <div className="font-bold text-secondary text-6xl">Bridge</div>
            <div className="flex flex-col gap-8 w-full max-w-[400px]">
                <h2>Se connecter</h2>
                <FormInput type="email" placeholder="email" />
                <FormInput type="password" placeholder="password" />
                <button type="submit" className="border-2 border-secondary bg-secondary hover:bg-white hover:text-secondary text-white p-3 rounded-md text-xl duration-200">se connecter</button>
                <Link to={"/forgot-password"} className="text-center text-secondary font-semibold">Mot de passe oublié ?</Link>
            </div>
        </div>
    );
}

export default Login;