import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";
import Jobs from "@/pages/Jobs";
import Agents from "@/pages/Agents";
import Agent from "@/pages/Agent";

const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Agents />
            },
            {
                path: "/agent/:id",
                element: <Agent />
            },
            {
                path: "/metiers",
                element: <Jobs />
            }
        ]
    }
]);

export default router;