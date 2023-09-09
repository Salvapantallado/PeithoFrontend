// import {
// 	GET_CATEGORIES,
// 	GET_PRODUCTS,
// 	PRODUCT_DETAIL,
// 	NEXT_PAGE,
// 	PREVIOUS_PAGE,
// 	SET_PAGINATION,
// 	GET_FAVORITES,
// 	FILTER_ITEMS,
// 	DELETE_PRODUCT,
// 	GET_STORIES,
// 	DELETE_STORIES,
// 	POST_PRODUCT,
// 	POST_STORIES
// } from "../actions/index.js";
import {products, categories} from "../helper/ProductsData.js";
import { stories } from "../helper/StoryMock.js";

let initialProducts = [];
for (let i = 0; i < products.length; i++) {
	const element = products[i];
	initialProducts.push(element);
} 

const initialState = {
	productCategories: categories,
	allProducts: initialProducts,
	productDetail: [],
	page: 1,
	setPagination: {
		filter: "",
		valueFilter: "",
		valueFilter2: "",
	},
	favoriteProducts: [],
	filteredProducts: [],
	allStories: stories,
	newStories: [],
	createdProduct: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_PRODUCTS": {
			return {
				...state,
				allProducts: action.payload
			}
		}
		case "PRODUCT_DETAIL": {
			return {
				...state,
				productDetail: action.payload,
			};
		}
		case "NEXT_PAGE": {
			return {
				...state,
				page: action.payload,
			};
		}
		case "PREVIOUS_PAGE": {
			return {
				...state,
				page: action.payload,
			};
		}
		case "SET_PAGINATION": {
			return {
				...state,
				setPagination: action.payload,
			};
		}
		case "GET_FAVORITES": {
			return {
				...state,
				favoriteProducts: action.payload
			};
		}
		case "FILTER_ITEMS": {
			return {
				...state,
				filteredProducts: action.payload
			}
		}
		case "DELETE_PRODUCT": {
			return {
			  ...state,
			  allProducts: action.payload
			};
		}
		case "DELETE_STORIES": {
			return {
				...state,

			};
		}
		case "POST_STORIES": {
			return {
				...state,
				allStories: state.allStories.concat(action.payload)
			}
		}
		case "POST_PRODUCT": {
			return{
				...state,
				allProducts: state.allProducts.concat(action.payload)
			}
		}
		default: {
			return state;
		}
	}
};

export default rootReducer;
