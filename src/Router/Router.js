import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import DashBoardLayout from "../layouts/DashBoardLayout";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]

    },
    {
        path: '/dashboard',
        element: <DashBoardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    }
])