import { useRouteError } from "react-router-dom";

interface ErrorResponse {
    statusText?: string;
    message?: string;
}

function ErrorPage() {
    const error = useRouteError() as ErrorResponse;
    console.error(error);

    return (
        <>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <>
                <i>{error.statusText || error.message}</i>
            </>
        </>
    );
}

export default ErrorPage;