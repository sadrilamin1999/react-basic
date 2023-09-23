const { createStore } = require("redux");

const INCREMENT = "INCREMENT";

const initialState = {
  count: 0,
};
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      state;
  }
};

const store = createStore(countReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementCounter());
