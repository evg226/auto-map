import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducerPoints, reducerOrders, reducerSelectedOrder } from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;;

export const store = createStore(
    combineReducers({
        points: reducerPoints,
        orders: reducerOrders,
        selectedOrder: reducerSelectedOrder

    }),
    composeEnhancers(applyMiddleware(thunk))
)