import axios from "axios";
import { products } from "../helper/ProductsData";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_FAVORITES = "GET_FAVORITES";

export const NEXT_PAGE = "NEXT_PAGE";
export const PREVIOUS_PAGE = "PREVIOUS_PAGE";
export const SET_PAGINATION = "SET_PAGINATION";

export const FILTER_ITEMS = "FILTER_ITEMS";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const POST_PRODUCT = "POST_PRODUCT";
export const PRODUCT_DETAIL = "PRODUCT_DETAIL";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const GET_STORIES = "GET_STORIES";
export const POST_STORIES = "POST_STORIES";
export const DELETE_STORIES = "DELETE_STORIES";

export function getAllProducts() {
  return async (dispatch) => {
    const res = products;
    dispatch({ type: "GET_PRODUCTS", payload: res });
  };
}

export function getProductDetail(array, id) {
  return async (dispatch) => {
    /* eslint-disable */
    const res = await array.find((mappedProduct) => mappedProduct.id == id);
    /* eslint-disable */
    dispatch({ type: "PRODUCT_DETAIL", payload: res });
  };
}
export function clearProductDetail() {
  return {
    type: "PRODUCT_DETAIL",
    payload: [],
  };
}

export function nextPage(page) {
  return {
    type: "NEXT_PAGE",
    payload: page,
  };
}

export function prevPage(page) {
  return {
    type: "PREVIOUS_PAGE",
    payload: page,
  };
}

export function setPagination(filter, valueFilter, valueFilter2) {
  return {
    type: "SET_PAGINATION",
    payload: {
      filter,
      valueFilter,
      valueFilter2,
    },
  };
}

export function getFavorites(data) {
  return {
    type: "GET_FAVORITES",
    payload: data,
  };
}

export function filterItems(data, array) {
  return async (dispatch) => {
    try {
      let res = await array.filter(
        /* eslint-disable */
        (x) => x.category.map((z) => z) == data
        /* eslint-disable */
      );
      if (data === "all") {
        res = [];
      }
      dispatch({ type: "FILTER_ITEMS", payload: [...res] });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByName(data, array) {
  return async (dispatch) => {
    try {
      let res = await array.filter((item) => item.name.toLowerCase().includes(data.toLowerCase()));
      if (data === "") {
        res = []; 
      }
      dispatch({ type: "FILTER_ITEMS", payload: [...res] });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postProduct(input) {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `/catalogo` || `http://localhost:3001/catalogo`,
        input
      );
      dispatch({ type: POST_PRODUCT, payload: res.data });
    } catch (err) {
      alert("HEMOSIDO TIMADO -error en post-");
      console.log(err);
    }
  };
}
export function postStories(input) {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `/stories`,
        input || `http://localhost:3001/stories/`,
        input
      );
      dispatch({ type: POST_STORIES, payload: res.data });
    } catch (err) {
      alert("HEMOSIDO TIMADO -error en post story-");
      console.log(err);
    }
  };
}

export function editProduct(input) {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `/catalogo/${input.id}`,
        input || `http://localhost:3001/catalogo/${input.id}`,
        input
      );
      dispatch({ type: EDIT_PRODUCT, payload: res.data });
    } catch (err) {
      console.log(err);
      alert("khe -error en edit product-");
    }
  };
}

export function deleteProduct(array, id) {
  return async (dispatch) => {
    try {
      const res = await array.splice(
        array.findIndex((i) => i.id === id),
        1
      );
      dispatch({ type: "DELETE_PRODUCT", payload: res });
    } catch (err) {
      alert(err, "error en delete");
    }
  };
}
export function deleteStories(id) {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `/stories/` + id || `http://localhost:3001/stories/` + id
      );
      dispatch({ type: DELETE_STORIES, payload: res.data });
    } catch (err) {
      alert(err, "error en delete");
    }
  };
}

// export const filterItems = (data, array) => (dispatch) => {
// 	if(data) {
// 		const res = array.filter(x => x.category === data);
// 		dispatch({ type: FILTER_ITEMS, payload: [...res]})
// 	}
// }

//   export function editFavorites(productId, userId, remove = false) {
//     return async dispatch => {
//       try {
//         const res = await axios.post(
//           `/editFavorites/${userId}` ||
//             `http://localhost:3001/editFavorites/${userId}`,
//           { productId: productId, remove: remove }
//         );
//         dispatch({ type: EDIT_FAVORITES, payload: res.data });
//       } catch (error) {
//         alert("ERROR AL EDITAR PRODUCTOS FAVORITOS");
//       }
//     };
//   }

//   export function getFavorites(userId) {
//     return async dispatch => {
//       try {
//         const res = await axios.get(
//           `/getFavorites/${userId}` ||
//             `http://localhost:3001/getFavorites/${userId}`
//         );
//         dispatch({ type: GET_FAVORITES, payload: res.data });
//       } catch (error) {
//         alert("ERROR AL OBTENER PRODUCTOS FAVORITOS");
//       }
//     };
