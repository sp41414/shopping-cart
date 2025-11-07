import { Link } from "react-router"

const ErrorPage = () => {
	return (
		<>
			<h1>404, Page Doesn't Exist</h1>
			<Link to="/">
				Go Back Home
			</Link>
		</>
	)
}

export default ErrorPage
