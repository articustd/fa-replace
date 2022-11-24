import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import Dev from '@pages/dev'
import ErrorPage from '@pages/error-page'
import Homepage from '@pages/homepage'
import SearchPage from '@pages/search-page'
import StoryPage from './pages/story-page'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dev/>,
        errorElement: <ErrorPage />
    },
    {
        path: "home",
        element: <Homepage />
    },
    {
        path: "search",
        element: <SearchPage />
    },
    {
        path: "story",
        element: <StoryPage />
    }
])

function RootComponent() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}

root.render(<RootComponent/>)