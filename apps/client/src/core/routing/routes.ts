import { createBrowserRouter } from "react-router";
import SignIn from "../../components/auth/signin";
import Home from "../../components/home/Home";

// export const PUBLIC_ROUTES = createBrowserRouter([
//     {
//         path: '/',
//         Component: App
//     }
// ]);

export const PRIVATE_ROUTES = createBrowserRouter([
    {
        path: '/',
        Component: SignIn
    },
    {
        path: '/home',
        Component: Home
    }
]);
