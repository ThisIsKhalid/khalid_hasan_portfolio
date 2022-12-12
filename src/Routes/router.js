import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Blogs from "../Pages/Blogs/Blogs";
import About from "../Pages/Home/About";
import ContactMe from "../Pages/Home/ContactMe";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Home/Projects/Projects";
import Skills from "../Pages/Home/Skills";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <ContactMe></ContactMe>
            },
        ]
    }
])

export default router;