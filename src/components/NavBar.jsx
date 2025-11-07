import { Link } from "react-router"
import styles from "../styles/NavBar.module.css"

const NavBar = ({ cartItems }) => {
	return (
		<div className={styles.container} >
			<h1>Shopping Cart</h1>
			<div className={styles.links}>
				<Link to="/" className={styles.link}>Home</Link>
				<Link to="/shop" className={styles.link}>Shop</Link>
				<Link to="/cart" className={styles.link}>Cart</Link>
				<p>Items: {cartItems.length}</p>
			</div>
		</div >
	)
}

export default NavBar
