
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import SiginIn from '../Pages/SiginIn';
import SignUp from '../Pages/SignUp';
import Dashboard from '../Layout/Dashboard';
import PrivateRoute from '../Private/PrivateRoute';
import CreateTask from '../Components/CreateTaks/CreateTask';

const Router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }

        ]
    },

    // Dashboard
    {
        path: '/dashboard',
        element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'create_task',
                element: <CreateTask></CreateTask>
            }
        ]
       
    },



    {
        path: '/signin',
        element: <SiginIn></SiginIn>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
])

export default Router;