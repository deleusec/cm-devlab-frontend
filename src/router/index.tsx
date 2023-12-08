import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Jobs from "../pages/Jobs";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/jobs",
                element: <Jobs />
            }
        ]
    }
]);

export default router;