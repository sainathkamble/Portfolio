import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Skills from './sec-compo/skills';
import Projects from './sec-compo/projects';
import Contact from './sec-compo/contact';

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