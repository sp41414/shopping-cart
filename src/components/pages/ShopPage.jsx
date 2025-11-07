import ItemCard from "../ItemCard"
import NavBar from "../NavBar"

const ShopPage = ({ cartItems, setCartItems }) => {
    const handleCartUpdate = (item) => {
        setCartItems((prevArray) => [...prevArray, { name: item.name, price: item.price, quantity: item.quantity, key: Date.now() + Math.random() }])
    }

    return (
        <div>
            <NavBar cartItems={cartItems} />
            <ItemCard name="Overly Expensive Item" price={5000} handleCartUpdate={handleCartUpdate} />
            <ItemCard name="Overly Cheap Item" price={2} handleCartUpdate={handleCartUpdate} />
        </div>
    )
}

export default ShopPage
