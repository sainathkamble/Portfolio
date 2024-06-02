import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/skills",
        element: <Skills/>
    },
    {
        path: "/projects",
        element: <Projects/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
])

export default Router;