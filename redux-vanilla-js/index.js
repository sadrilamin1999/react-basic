const { createStore } = require("redux");

const BUY_FOOTBALL = "BUY_FOOTBALL";
const RESTOCK_FOOTBALL = "RESTOCK_FOOTBALL";
const BUY_JOURCY = "BUY_JOURCY";
const RESTOCK_JOURCY = "RESTOCK_JOURCY";

const initialState = {
  numberOfFootball: 10,
  numberOfJourcy: 10,
};

const buyFootball = (qnt = 1) => {
  return {
    type: BUY_FOOTBALL,
    qunatity: qnt,
  };
};
const restockFootball = (qnt = 1) => {
  return {
    type: RESTOCK_FOOTBALL,
    qunatity: qnt,
  };
};

const buyJourcy = (qnt) => {
  return {
    type: BUY_JOURCY,
    qunatity: qnt,
  };
};
const restockJourcy = (qnt = 1) => {
  return {
    type: RESTOCK_JOURCY,
    qunatity: qnt,
  };
};

const footballReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_FOOTBALL:
      return {
        ...state,
        numberOfFootball: state.numberOfFootball - action.qunatity,
      };
    case RESTOCK_FOOTBALL:
      return {
        ...state,
        numberOfFootball: state.numberOfFootball + action.qunatity,
      };
    case BUY_JOURCY:
      return {
        ...state,
        numberOfJourcy: state.numberOfJourcy - action.qunatity,
      };
    case RESTOCK_JOURCY:
      return {
        ...state,
        numberOfJourcy: state.numberOfJourcy + action.qunatity,
      };

    default:
      state;
  }
};

const store = createStore(footballReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(buyFootball(10));

store.dispatch(restockFootball(100));

store.dispatch(buyJourcy(5));
store.dispatch(restockJourcy(20));
