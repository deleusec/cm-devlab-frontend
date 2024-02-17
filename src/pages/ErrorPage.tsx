import { Link } from "react-router-dom";
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

function ErrorPage() {

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 text-center">
                    <div className="max-w-md">
                        <div className="text-5xl text-secondary font-bold">404</div>
                        <p className="text-2xl md:text-3xl font-light leading-normal">
                            Désolé, nous n'avons pas pu trouver cette page.
                        </p>
                        <p className="mb-8">
                            Mais ne vous inquiétez pas, vous pouvez retrouver votre chemin à partir d'ici.
                        </p>

                        <Link to="/" className="px-4 py-2 bg-secondary text-white font-semibold rounded hover:bg-secondary-dark transition duration-200 each-in-out">
                            <ArrowLeftIcon className="w-5 inline-block mr-2" />
                            Retour à la page d'accueil
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ErrorPage;