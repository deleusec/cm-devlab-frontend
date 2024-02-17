import AuthFormButton from "@/components/form/auth/AuthFormButton";
import AuthFormInput from "@/components/form/auth/AuthFormInput";

function ForgotPassword() {
    return ( 
        <div className="w-full h-[100vh] bg-gray-light flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col gap-8 w-full max-w-[400px]">
                <h1>Mot de passe oublié ?</h1>
                <AuthFormInput type="email" placeholder="email" />
                <AuthFormButton text="Se connecter" theme="dark" />      
            </div>
        </div>
     );
}

export default ForgotPassword;