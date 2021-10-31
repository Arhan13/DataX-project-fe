import "./App.css"
import Navbar from "./components/Navbar"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Staking from "./pages/Staking"
import Stats from "./pages/Stats"
import Profile from "./pages/Profile"
import About from "./pages/About"

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/" component={Profile} exact />
					<Route path="/about" component={About} exact />
					<Route path="/manage" component={Staking} exact />
					<Route path="/stats" component={Stats} exact />
				</Switch>
			</div>
		</Router>
	)
}

export default App
