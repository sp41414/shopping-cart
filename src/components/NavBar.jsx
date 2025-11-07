import { Link } from "react-router"

const NavBar = () => {
	return (
		<div>
			<h1>Shopping Cart</h1>
			<div>
				<Link to="/">Home</Link>
				<Link to="shop">Shop</Link>
				<Link to="cart">Cart</Link>
			</div>
		</div>
	)
}
