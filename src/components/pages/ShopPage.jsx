import { useState, useEffect } from "react"
import ItemCard from "../ItemCard"
import NavBar from "../NavBar"
import styles from "../../styles/Shop.module.css"

const ShopPage = ({ cartItems, setCartItems }) => {
	const [products, setProducts] = useState(null)
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const handleCartUpdate = (item) => {
		setCartItems((prevArray) => [...prevArray, { name: item.name, price: item.price, quantity: item.quantity, key: Date.now() + Math.random() }])
	}

	// currently there is no caching but thats not a requirement so...
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch("https://fakestoreapi.com/products")
				const data = await res.json();

				const products = data.map((element) => ({
					name: element.title,
					price: element.price
				}))

				setProducts(products);
			} catch (err) {
				console.error("Error: ", err)
				setError(err)
			} finally {
				setLoading(false);
			}
		}
		fetchProducts();
	}, [])

	return (
		<div>
			<NavBar cartItems={cartItems} />
			{error ? (
				<h1 className={styles.header}>An Error Occured</h1>
			) : (
				<></>
			)}
			{!loading ? (
				<>
					<h1 className={styles.header}>Products</h1>
					<div className={styles.itemsContainer}>
						{products.map((element) => {
							return <ItemCard name={element.name} price={element.price} handleCartUpdate={handleCartUpdate} />
						})}
					</div>
				</>
			) : (
				<h1 className={styles.header}>Loading...</h1>
			)
			}
		</div >
	)
}

export default ShopPage
