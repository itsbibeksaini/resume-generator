import { createBrowserRouter } from "react-router";
import Home from "../../components/home/Home";
import Layout from "../../components/shared/layout/Layout";
import SignIn from "../../components/auth/SignIn";
import NewResume from "../../components/new-resume/NewResume";
import Template1 from "../../resume-templates/template1/Template1";
import TemplateLayout from "../../resume-templates/shared/template-layout/TemplateLayout";
import Template2 from "../../resume-templates/template2/Template2";
import Template3 from "../../resume-templates/template3/Template3";

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
    },
    {
        path: '/new-resume',
        Component: Layout,
        children: [{
            path: '/new-resume',
            Component: NewResume
        }]
    }, {
        path: '',
        Component: Layout,
        children: [{
            path: '/template1',
            loader: () => {
                return { title: 'Template 1' };
            },
            Component: TemplateLayout,
            children:[{
                path: '',
                Component: Template1
            }]
        }, {
            path: '/template2',
            loader: () => {
                return { title: 'Template 2' };
            },
            Component: TemplateLayout,
            children:[{
                path: '',
                Component: Template2
            }]
        }, {
            path: '/template3',
            loader: () => {
                return { title: 'Template 2' };
            },
            Component: TemplateLayout,
            children:[{
                path: '',
                Component: Template3
            }]
        }]
    }
]);
