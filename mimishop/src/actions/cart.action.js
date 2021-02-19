import axiosInstance from '../helpers/axios';
import store from '../store';
import { cartConstants } from './constants';

const getCartItemsAction = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
			const res = await axiosInstance.post(`/user/getCartItems`);
			if (res.status === 200) {
				const { cartItems } = res.data;
				if (cartItems) {
					dispatch({
						type: cartConstants.ADD_TO_CART_SUCCESS,
						payload: { cartItems }
					});
				}
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const addToCartAction = (product, newQty = 1) => {
	return async (dispatch) => {
		const { cart: { cartItems }, auth } = store.getState();

		// console.log('action::products', cartItems);
		const qty = cartItems[product._id] ? parseInt(cartItems[product._id].qty + newQty) : 1;
		cartItems[product._id] = {
			...product,
			qty
		};

		if (auth.authenticate) {
			dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
			const payload = {
				cartItems: [
					{
						product: product._id,
						quantity: qty
					}
				]
			};
			const res = await axiosInstance.post(`/user/cart/addtocart`, payload);

			if (res.status === 201) {
				dispatch(getCartItemsAction());
			}
		} else {
			localStorage.setItem('cart', JSON.stringify(cartItems));
		}

		dispatch({
			type: cartConstants.ADD_TO_CART_SUCCESS,
			payload: {
				cartItems
			}
		});
	};
};

export const removeCartItemAction = (payload) => {
	return async (dispatch) => {
		try {
			dispatch({ type: cartConstants.REMOVE_CART_ITEM_REQUEST });

			const res = await axiosInstance.post(`/user/cart/removeitem`, { payload });

			if (res.status === 202) {
				dispatch({
					type: cartConstants.REMOVE_CART_ITEM_SUCCESS
				});
				dispatch(getCartItemsAction());
			} else {
				dispatch({
					type: cartConstants.REMOVE_CART_ITEM_FAILURE,
					payload: { error: res.data.error }
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateCartAction = () => {
	return async (dispatch) => {
		const { auth } = store.getState();
		let cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;

		// console.log('hello from update cart action');

		if (auth.authenticate) {
			localStorage.removeItem('cart');
			if (cartItems) {
				const payload = {
					cartItems: Object.keys(cartItems).map((key, index) => {
						return {
							quantity: cartItems[key].qty,
							product: cartItems[key]._id
						};
					})
				};
				if (Object.keys(cartItems).length > 0) {
					const res = await axiosInstance.post(`/user/cart/addtocart`, payload);

					if (res.status === 201) {
						dispatch(getCartItemsAction());
					}
				}
			}
		} else {
			if (cartItems) {
				dispatch({
					type: cartConstants.ADD_TO_CART_SUCCESS,
					payload: { cartItems }
				});
			}
		}
	};
};

export { getCartItemsAction };
