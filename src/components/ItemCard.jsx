import { useState } from "react"
import styles from "../styles/Shop.module.css"
import buttonStyles from "../styles/App.module.css"

const ItemCard = ({ name = "Banana", price = "3", handleCartUpdate }) => {
	const [itemQuantity, setItemQuantity] = useState(1)
	const [itemPrice, setItemPrice] = useState(price)

	const handleQuantityChange = (e) => {
		setItemQuantity(e.target.value)
		setItemPrice(e.target.value * price)
	}

	return (
		<div className={styles.itemContainer}>
			<h2 className={styles.header}>{name}</h2>
			<input className={styles.itemInput} type="number" onChange={handleQuantityChange} value={itemQuantity} placeholder="Item Quantity" min="1" />
			<p>Price: <span className={styles.priceText}>{itemPrice}$</span></p>

			<button className={buttonStyles.button} type="button" onClick={() => handleCartUpdate({ name, price: itemPrice, quantity: itemQuantity })}>Add To Cart</button>
		</div>
	)
}

export default ItemCard
