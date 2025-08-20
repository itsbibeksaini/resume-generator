import { createBrowserRouter } from "react-router";
import App from "../../App";

// export const PUBLIC_ROUTES = createBrowserRouter([
//     {
//         path: '/',
//         Component: App
//     }
// ]);

export const PRIVATE_ROUTES = createBrowserRouter([
    {
        path: '/',
        Component: App
    }
]);
