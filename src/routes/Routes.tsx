import {createHashRouter} from "react-router-dom";
import {App} from "../App";
import {Test} from "../features/Test";

const ErrorPage = () => {
    return <div>ErrorPage</div>
}

const Login = () => {
    return <div>Login</div>
}

const RecoveryPassword = () => {
    return <div>RecoveryPassword</div>
}

const Registration = () => {
    return <div>Registration</div>
}

const Profile = () => {
    return <div>Profile</div>
}

const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/profile",
        element: <Profile/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/registration",
        element: <Registration/>,
    },
    {
        path: "/test",
        element: <Test/>,
    },
    {
        path: "/recovery-password",
        element: <RecoveryPassword/>,
    },
]);

export default router