import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { isUserLoggedIn, updateCartAction } from './actions';
import './App.css';
import CartPage from './containers/CartPage';
import HomePage from './containers/HomePage';
import ProductDetailsPage from './containers/ProductDetailsPage';
import ProductListPage from './containers/ProductListPage';

function App() {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	useEffect(
		() => {
			if (!auth.authenticate) {
				dispatch(isUserLoggedIn());
			}
		},
		[ auth.authenticate ]
	);

	useEffect(() => {
		dispatch(updateCartAction());
	}, []);

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/cart" component={CartPage} />
					<Route path="/:productSlug/:productId/p" component={ProductDetailsPage} />
					<Route path="/:slug" component={ProductListPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
