import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'instructors',
                element: <Instructors />,
            },
            {
                path: 'classes',
                element: <Classes />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'registration',
                element: <Registration />,
            }
        ]
    }
])

export default router;