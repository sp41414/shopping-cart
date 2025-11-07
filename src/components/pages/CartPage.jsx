import NavBar from "../NavBar"

const CartPage = ({ cartItems, setCartItems }) => {
	const handleRemoveFromCart = (key) => {
		setCartItems(cartItems.filter(element => element.key !== key))
	}

	return (
		<div>
			<NavBar cartItems={cartItems} />
			{cartItems ? (cartItems.map((element) => {
				console.log(element)
				return <div key={element.key}>
					<h1>{element.name}</h1>
					<p>Price: {element.price}$</p>
					<p>Quantity: {element.quantity}</p>
					<button type="button" onClick={() => handleRemoveFromCart(element.key)}>Remove From Cart</button>
				</div>
			})) : (
				<>
					<h1>There are no Items in your Cart!</h1>
					<Link to="/shop">Shop Now</Link>
				</>
			)}
		</div>
	)
}

export default CartPage
