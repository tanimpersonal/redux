const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
// const thunk = require("redux-thunk");
const getTodo = "GET_TODO";
const getTodoSuccess = "GET_TODO_SUCCESS";
const getTodoFail = "GET_TODO_FAIL";
const api = "https://jsonplaceholder.typicode.com/todos";
//states
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};
// actions
const getTodosRequest = () => {
  return {
    type: getTodo,
  };
};
const getTodosFailed = (error) => {
  return {
    type: getTodoFail,
    payload: error,
  };
};

const getTodosSuccess = (todos) => {
  return {
    type: getTodoSuccess,
    payload: todos,
  };
};
// reducers
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case getTodo:
      return {
        ...state,
        isLoading: true,
      };
    case getTodoSuccess:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case getTodosFailed:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
// async action
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(api)
      .then((res) => {
        const data = res.data;
        const todos = data.map((data) => data.title);
        dispatch(getTodosSuccess(todos));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
// store
const store = createStore(todosReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchData());
