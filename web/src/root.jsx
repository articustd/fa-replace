import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import Dev from '@pages/dev'
import ErrorPage from '@pages/error-page'
import Homepage from '@pages/homepage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dev/>,
        errorElement: <ErrorPage />
    },
    {
        path: "home",
        element: <Homepage />
    }
])

function Root() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));