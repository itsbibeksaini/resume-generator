import { createBrowserRouter } from "react-router";
import Home from "../../components/home/Home";
import Layout from "../../components/shared/layout/Layout";
import SignIn from "../../components/auth/SignIn";

// export const PUBLIC_ROUTES = createBrowserRouter([
//     {
//         path: '/',
//         Component: App
//     }
// ]);

export const PRIVATE_ROUTES = createBrowserRouter([
    {
        path: '/',
        Component: SignIn,
    },
    {
        path: '/home',
        Component: Layout,
        children: [{
            path: '/home',
            Component: Home
        }]
    }
]);
