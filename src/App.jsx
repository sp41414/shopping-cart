import { Link } from "react-router"
import NavBar from "./components/NavBar"
import styles from "./styles/App.module.css"

const App = ({ cartItems }) => {
	return (
		<div className={styles.container}>
			<NavBar cartItems={cartItems} />
			<div className={styles.textContainer}>
				<div className={styles.headerContainer}>
					<h1>Welcome to XXXX Commerce!</h1>
				</div>
				<div className={styles.linkContainer}>
					<p>We sell our products at great prices and have great customer service!</p>
					<p>Source: Trust me bro!</p>
					<button type="button" className={styles.button}>
						<Link to="shop" className={styles.link}>Shop Now</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default App
