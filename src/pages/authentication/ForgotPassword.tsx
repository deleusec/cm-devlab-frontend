import FormButton from "@/components/form/FormButton";
import FormInput from "@/components/form/FormInput";

function ForgotPassword() {
    return ( 
        <div className="w-full h-[100vh] bg-light-gray flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col gap-8 w-full max-w-[400px]">
                <h1>Mot de passe oublié ?</h1>
                <FormInput type="email" placeholder="email" />
                <FormButton text="Se connecter" theme="dark" />      
            </div>
        </div>
     );
}

export default ForgotPassword;