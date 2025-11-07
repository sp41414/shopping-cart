import App from "./App.jsx"
import ErrorPage from "./components/pages/ErrorPage.jsx"
import ShopPage from "./components/pages/ShopPage.jsx"
import CartPage from "./components/pages/CartPage.jsx"

const routes = [
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />
	},
	{
		path: "shop",
		element: <ShopPage />
	},
	{
		path: "cart",
		elemnt: <CartPage />
	}
]

export default routes;
