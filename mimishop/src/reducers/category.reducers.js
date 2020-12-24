import { categoryConstants } from '../actions/constants';

const initState = {
	categories: [],
	loading: false,
	error: null
};

const buildNewCategories = (parentId, categories, category) => {
	let myCategories = [];

	if (parentId === undefined) {
		return [
			...categories,
			{
				_id: category._id,
				name: category.name,
				slug: category.slug,
				parentId: category.parentId,
				children: []
			}
		];
	}

	for (let cat of categories) {
		if (cat._id === parentId) {
			myCategories.push({
				...cat,
				children: cat.children
					? buildNewCategories(
							parentId,
							[
								...cat.children,
								{
									_id: category._id,
									name: category.name,
									slug: category.slug,
									parentId: category.parentId,
									children: category.children
								}
							],
							category
						)
					: []
			});
		} else {
			myCategories.push({
				...cat,
				children: cat.children ? buildNewCategories(parentId, cat.children, category) : []
			});
		}
	}

	return myCategories;
};

export default (state = initState, action) => {
	// eslint-disable-next-line
	switch (action.type) {
		case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
			state = {
				...state,
				categories: action.payload.categories
			};
			break;

		case categoryConstants.ADD_NEW_CATEGORIES_REQUEST:
			state = {
				...state,
				loading: true
			};
			break;

		case categoryConstants.ADD_NEW_CATEGORIES_SUCCESS:
			const category = action.payload.category;
			const updatedCategories = buildNewCategories(category.parentId, state.categories, category);
			// console.log(updatedCategories);
			state = {
				...state,
				loading: false,
				categories: updatedCategories
			};
			break;

		case categoryConstants.ADD_NEW_CATEGORIES_FAILURE:
			state = {
				...state,
				loading: false,
				error: action.payload.error
			};
	}
	return state;
};
