import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Skills from './skills.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';

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