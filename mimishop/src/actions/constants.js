export const categoryConstants = {
	GET_ALL_CATEGORIES_REQUEST: 'GET_ALL_CATEGORIES_REQUEST',
	GET_ALL_CATEGORIES_SUCCESS: 'GET_ALL_CATEGORIES_SUCCESS',
	ADD_NEW_CATEGORIES_REQUEST: 'ADD_NEW_CATEGORIES_REQUEST',
	ADD_NEW_CATEGORIES_SUCCESS: 'ADD_NEW_CATEGORIES_SUCCESS',
	ADD_NEW_CATEGORIES_FAILURE: 'ADD_NEW_CATEGORIES_FAILURE'
};

export const productConstants = {
	GET_ALL_PRODUCT_REQUEST: 'GET_ALL_PRODUCT_REQUEST',
	GET_ALL_PRODUCT_SUCCESS: 'GET_ALL_PRODUCT_SUCCESS',
	GET_ALL_PRODUCT_FAILURE: 'GET_ALL_PRODUCT_FAILURE',

	GET_PRODUCTS_BY_SLUG_REQUEST: 'GET_PRODUCTS_BY_SLUG_REQUEST',
	GET_PRODUCTS_BY_SLUG_SUCCESS: 'GET_PRODUCTS_BY_SLUG_SUCCESS',
	GET_PRODUCTS_BY_SLUG_FAILURE: 'GET_PRODUCTS_BY_SLUG_FAILURE',

	GET_PRODUCT_DETAILS_BY_ID_REQUEST: 'GET_PRODUCT_DETAILS_BY_ID_REQUEST',
	GET_PRODUCT_DETAILS_BY_ID_SUCCESS: 'GET_PRODUCT_DETAILS_BY_ID_SUCCESS',
	GET_PRODUCT_DETAILS_BY_ID_FAILURE: 'GET_PRODUCT_DETAILS_BY_ID_FAILURE',

	GET_PRODUCT_PAGE_REQUEST: 'GET_PRODUCT_PAGE_REQUEST',
	GET_PRODUCT_PAGE_SUCCESS: 'GET_PRODUCT_PAGE_SUCCESS',
	GET_PRODUCT_PAGE_FAILURE: 'GET_PRODUCT_PAGE_FAILURE'
};

export const authConstants = {
	LOGIN_REQUEST: 'LOGIN_REQUEST',
	LOGIN_FAILURE: 'LOGIN_FAILURE',
	LOGIN_SUCCESS: 'LOGIN_SUCCESS',
	LOGOUT_REQUEST: 'LOGOUT_REQUEST',
	LOGOUT_FAILURE: 'LOGOUT_FAILURE',
	LOGOUT_SUCCESS: 'LOGOUT_SUCCESS'
};

export const cartConstants = {
	ADD_TO_CART_REQUEST: 'ADD_TO_CART_REQUEST',
	ADD_TO_CART_SUCCESS: 'ADD_TO_CART_SUCCESS',
	ADD_TO_CART_FAILURE: 'ADD_TO_CART_FAILURE',
	ADD_TO_CART: 'ADD_TO_CART'
};
