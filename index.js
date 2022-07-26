//1. State
//2. Action
//3. Reducer
//4. Store
const { createStore } = require("redux");
//redux has two parts. state and the action
const increment = "INCREMENT";
const decrement = "DECREMENT";
const addUserState = "addUser";
//state
const initialState = {
  counter: 0,
  user: [{ name: "tanim" }],
};

//it's an object
const incrementCounter = () => {
  //action- it's an object which have two things. type and payload.

  return {
    type: increment,
  };
};
const decrementCounter = () => {
  return {
    type: decrement,
  };
};
//by using payload we can send data to the action.
const addUser = () => {
  return {
    type: addUserState,
    payload: 5,
  };
};

//create reducer for counter
// reducer is a pure function which definitely returns something

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        counter: state.counter + 1,
      };
    //
    case decrement:
      return {
        //with spread we're just spreading all the things inside the object but just changing the count value only.
        ...state,
        counter: state.counter - 1,
      };
    //
    case addUserState:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      state;
  }
};

//store. it just stores the data. it has 3 method
// getState()- we can see the states with it
// dispatch()- dispatch an action
// subscribe()- just subscribe the view

//create store
const store = createStore(counterReducer);
//subscribe
store.subscribe(() => {
  //get the state
  console.log(store.getState());
});
//dispatch
store.dispatch(addUser());
