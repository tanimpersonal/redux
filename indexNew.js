const { createStore } = require("redux");
const increment = "INCREMENT";
const decrement = "DECREMENT";
//state
const initialState = {
  count: 0,
};
//action
const increase = () => {
  return {
    type: increment,
  };
};
const decrease = () => {
  return {
    type: decrement,
  };
};

//reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case decrement:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};
const store = createStore(counter);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(increase());
