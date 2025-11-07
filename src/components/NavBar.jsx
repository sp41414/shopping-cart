import { Link } from "react-router"

const NavBar = ({ cartItems }) => {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="shop">Shop</Link>
                <Link to="cart">Cart</Link>
                <p>{cartItems.length}</p>
            </div>
        </div>
    )
}

export default NavBar
