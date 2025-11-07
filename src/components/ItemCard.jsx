import { useState } from "react"

const ItemCard = ({ name = "Banana", price = "3", handleCartUpdate }) => {
	const [itemQuantity, setItemQuantity] = useState(1)
	const [itemPrice, setItemPrice] = useState(price)

	const handleQuantityChange = (e) => {
		setItemQuantity(e.target.value)
		setItemPrice(e.target.value * price)
	}

	return (
		<div>
			<h1>{name}</h1>
			<input type="number" onChange={handleQuantityChange} value={itemQuantity} placeholder="Item Quantity" />
			<p>Price: {itemPrice}$</p>

			<button type="button" onClick={() => handleCartUpdate({ name, price: itemPrice, quantity: itemQuantity })}>Add To Cart</button>
		</div>
	)
}

export default ItemCard
