import NavBar from "../NavBar"
import { Link } from "react-router"
import shopStyles from "../../styles/Shop.module.css"
import appStyles from "../../styles/App.module.css"

const CartPage = ({ cartItems, setCartItems }) => {
	const handleRemoveFromCart = (key) => {
		setCartItems(cartItems.filter(element => element.key !== key))
	}

	return (
		<div>
			<NavBar cartItems={cartItems} />
			{cartItems.length > 0 ? (
				<>
					<h1 className={shopStyles.header}>Cart</h1>
					<div className={shopStyles.itemsContainer}>
						{cartItems.map((element) => {
							return (
								<div key={element.key} className={shopStyles.itemContainer}>
									<h2>{element.name}</h2>
									<p className={shopStyles.priceText}>Price: {element.price}$</p>
									<p>Quantity: {element.quantity}</p>
									<button className={appStyles.button} type="button" onClick={() => handleRemoveFromCart(element.key)}>
										Remove From Cart
									</button>
								</div>
							);
						})}
					</div>
				</>
			) : (
				<div className={shopStyles.centered}>
					<h1 className={shopStyles.header}>There are no Items in your Cart!</h1>
					<button className={appStyles.button}><Link to="/shop" className={appStyles.link}>Shop Now</Link></button>
				</div>
			)}
		</div>
	);
}

export default CartPage
