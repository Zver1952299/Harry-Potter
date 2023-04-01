import HomePage from "@pages/HomePage/HomePage";
import StudentsPage from "@pages/StudentsPage/StudentsPage";
import PersonPage from "../pages/PersonPage/PersonPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";

const routesConfig = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/students',
        element: <StudentsPage/>
    },
    {
        path: '/students/:id',
        element: <PersonPage/>
    },
    {
        path: '/favorites',
        element: <FavoritesPage/>
    },
    {
        path: '/not-found',
        element: <NotFoundPage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
];

export default routesConfig;