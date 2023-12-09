import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";
import Jobs from "@/pages/Jobs";
import Agents from "@/pages/Agents";
import Agent from "@/pages/Agent";
import Users from "@/pages/Users";
import Login from "@/pages/authentication/Login";
import ForgotPassword from "@/pages/authentication/ForgotPassword";

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
            },
            {
                path: "/users",
                element: <Users />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />
    }
]);

export default router;