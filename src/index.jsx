import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
        createBrowserRouter,
        RouterProvider,
} from "react-router-dom";
import Velociraptor from './Velociraptor';
import Spinosaurus from './Spinosaurus';


const router = createBrowserRouter([
        {
                path: "/",
                element: <App />,
        },
        {
                path: "/Velociraptor",
                element: <Velociraptor />,
        },
        {
                path: "/Spinosaurus",
                element: <Spinosaurus />,
        },
]);;
ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
                <RouterProvider router={router} />
        </React.StrictMode>
);