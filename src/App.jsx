import { Link } from "react-router"
import NavBar from "./components/NavBar"

const App = ({ cartItems }) => {
    return (
        <>
            <NavBar cartItems={cartItems} />
            <div>
                <div>
                    <h1>Welcome to XXXX Commerce!</h1>
                </div>
                <div>
                    <p>We sell our products at great prices and have great customer service! Source: trust me bro!</p>
                    <Link to="shop">Shop Now</Link>
                </div>
            </div>
        </>
    )
}

export default App
