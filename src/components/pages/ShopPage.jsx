import { useState, useEffect } from "react"
import ItemCard from "../ItemCard"
import NavBar from "../NavBar"

const ShopPage = ({ cartItems, setCartItems }) => {
	const [products, setProducts] = useState(null)

	const handleCartUpdate = (item) => {
		setCartItems((prevArray) => [...prevArray, { name: item.name, price: item.price, quantity: item.quantity, key: Date.now() + Math.random() }])
	}

	// currently there is no caching but thats not a requirement so...
	useEffect(() => {
		const fetchProducts = async () => {
			const res = await fetch("https://fakestoreapi.com/products")
			const data = await res.json();

			const products = data.map((element) => ({
				name: element.title,
				price: element.price
			}))

			setProducts(products);
		}
		fetchProducts();
	}, [])

	return (
		<div>
			<NavBar cartItems={cartItems} />
			{products ? (
				<>
					<h1>Products</h1>
					{products.map((element) => {
						return <ItemCard name={element.name} price={element.price} handleCartUpdate={handleCartUpdate} />
					})}
				</>
			) : (
				<h1>Loading...</h1>
			)
			}
		</div >
	)
}

export default ShopPage
