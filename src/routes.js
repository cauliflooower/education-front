import Admin from "./components/Admin";
import {ADMIN_ROUTE, HOME_ROUTE, CATEGORY_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, MESSANGER_ROUTE, APPLICATION_ROUTE, TABLE_ROUTE, INFORM_ROUTE, QUESTION_ROUTE} from "./utils/consts";
import Home from "./components/Home";
import Category from "./components/Category";
import Login from "./autorization/login";
import Profile from "./components/Profile"
import InformTable from "./components/InformTable";
import Applications from "./components/Applications";
import Messanger from "./components/Messanger";
import CategoryTable from "./components/CategoryTable";
import CategoryDispatch from "./components/CategoryDispatch";
import UsComponent from "./components/UsComponent";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    // {
    //     path: HOME_ROUTE + '/:name',
    //     Component: Home
    // },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: PROFILE_ROUTE + '/:name',
        Component: Profile
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: MESSANGER_ROUTE,
        Component: Messanger
    },
    {
        path: APPLICATION_ROUTE,
        Component: Applications
    },
    {
        path: TABLE_ROUTE,
        Component: CategoryTable
    },
    {
        path: CATEGORY_ROUTE + '/:id',
        Component: CategoryDispatch
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Login
    },
    {
        path: CATEGORY_ROUTE,
        Component: Category
    },
    {
        path: INFORM_ROUTE,
        Component: InformTable
    },
    {
        path: QUESTION_ROUTE,
        Component: UsComponent
    },
]