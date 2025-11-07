import App from "./App.jsx"
import ErrorPage from "./components/pages/ErrorPage.jsx"
import ShopPage from "./components/pages/ShopPage.jsx"
import CartPage from "./components/pages/CartPage.jsx"
import { useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router"

const AppRoutes = () => {
    const [cartItems, setCartItems] = useState([])

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <App cartItems={cartItems} />,
            errorElement: <ErrorPage />
        },
        {
            path: "shop",
            element: <ShopPage cartItems={cartItems} setCartItems={setCartItems} />
        },
        {
            path: "cart",
            elemnt: <CartPage cartItems={cartItems} />
        }
    ])

    return <RouterProvider router={routes} />
}

export default AppRoutes;
