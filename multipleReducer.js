//product reducer
//middleware must import
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
const getProducts = "GET_PRODUCTS";
const addProducts = "ADD_PRODUCTS";
//cart
const getCarts = "GET_CARTS";
const addCarts = "ADD_CARTS";
//product states
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};
//cart states
const initialCartState = {
  cart: ["sugar"],
  numberOfProductsCart: 1,
};
const getProduct = () => {
  return {
    type: getProducts,
  };
};

const addProduct = (product) => {
  return {
    type: addProducts,
    payload: product,
  };
};

//cart states
const getCart = () => {
  return {
    type: getCarts,
  };
};

const addCart = (cartItem) => {
  return {
    type: addCarts,
    payload: cartItem,
  };
};

//product reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case getProducts:
      return {
        ...state,
      };
    case addProducts:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

//cart reducer

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case getCarts:
      return {
        ...state,
      };
    case addCarts:
      return {
        cart: [...state.cart, action.payload],
        numberOfProductsCart: state.numberOfProductsCart + 1,
      };
    default:
      return state;
  }
};
//multipleReducer
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});
//store
const store = createStore(rootReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getCart());
store.dispatch(addCart("lomba"));
store.dispatch(getProduct());
store.dispatch(addProduct("hati"));
