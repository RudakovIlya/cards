import {
    createBrowserRouter,
} from "react-router-dom";
import {App} from "../App";
import {Test} from "../features/Test";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/login",
        element: <h1>Login</h1>,
    },
    {
        path: "/registration",
        element: <h1>Registration</h1>,
    },
    {
        path: "/profile",
        element: <h1>Profile</h1>,
    },
    {
        path: "/404",
        element: <h1>404</h1>,
    },
    {
        path: "/recovery-password",
        element: <h1>Recovery-password</h1>,
    },
    {
        path: "/test",
        element: <Test/>,
    },
]);

export default router