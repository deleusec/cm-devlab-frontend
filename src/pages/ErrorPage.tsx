import { useRouteError } from "react-router-dom";
import Layout from "../components/layouts/templates/Layout";

interface ErrorResponse {
    statusText?: string;
    message?: string;
}

function ErrorPage() {
    const error = useRouteError() as ErrorResponse;
    console.error(error);

    return (
        <Layout>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <>
                <i>{error.statusText || error.message}</i>
            </>
        </Layout>
    );
}

export default ErrorPage;