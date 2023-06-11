import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import SeletedClasses from "../pages/Dashboard/Student/SelectedClasses/SeletedClasses";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses/EnrolledClasses";
import AddNewClass from "../pages/Dashboard/Instructor/AddNewClass/AddNewClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import PrivateRoute from "./PrivateRoute";
import StudentRoute from "./StudentRoute";
import InstructorRoute from "./InstructorRoute";
import UpdateClass from "../pages/Dashboard/Instructor/UpdateClass/UpdateClass";

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
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'selected-classes',
                element: <StudentRoute><SeletedClasses /></StudentRoute>,
            },
            {
                path: 'enrolled-classes',
                element: <StudentRoute><EnrolledClasses /></StudentRoute>,
            },
            {
                path: 'add-new-class',
                element: <InstructorRoute><AddNewClass /></InstructorRoute>,
            },
            {
                path: 'my-classes',
                element: <InstructorRoute><MyClasses /></InstructorRoute>,
            },
            {
                path: 'update-class/:id',
                element: <UpdateClass />
            }
        ]
    }
])

export default router;