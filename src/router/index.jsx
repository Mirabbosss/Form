import { createBrowserRouter } from 'react-router-dom'; 
import { FormLayout } from '../layouts/form'
import { FirstForm } from '../components/form/FirstForm';
import { SecondForm } from '../components/form/SecondForm';


const router = [
    {
        path: "/",
        element: <FormLayout />,
        children: [
            {
                path: "/",
                element: <FirstForm />,
            },
            {
                path: "/second",
                element: <SecondForm />,
            }
        ]
    }
]

export const AppRouter = createBrowserRouter(router)
