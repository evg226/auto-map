import { CHANGE_END_POINT, CHANGE_START_POINT, SET_SELECTED_ORDER } from "./actions"

const defaultPoints = [
    { id: 1, name: "C-Петербург", longitude: 59.918072, latitude: 30.304908 },
    { id: 2, name: "Москва", longitude: 55.749, latitude: 37.524 },
    { id: 3, name: "Казань", longitude: 55.796127, latitude: 49.106414 },
    { id: 4, name: "Самара", longitude: 53.195878, latitude: 50.100202 },
]

export const reducerPoints = (state = defaultPoints, action) => {
    switch (action.type) {
        default:
            return state
    }
}


const defaultOrders = [
    {
        id: 1,
        author: "Саша",
        createdAt: "2022-06-12",
        startPoint: { id: 1, },
        endPoint: { id: 2 }
    },
    { id: 2, author: "Лена", createdAt: "2022-07-03", startPoint: { id: 2 }, endPoint: { id: 3 } },
    { id: 3, author: "Артем", createdAt: "2022-07-05", startPoint: { id: 3 }, endPoint: { id: 2 } },
    { id: 4, author: "Настя", createdAt: "2022-07-12", startPoint: { id: 3 }, endPoint: { id: 1 } },
]

export const reducerOrders = (state = defaultOrders, action) => {
    switch (action.type) {
        case CHANGE_START_POINT:
            const orderChangeStartPoint = state.find(item => item.id === action.payload.orderId)
            orderChangeStartPoint.startPoint.id = action.payload.startPointId
            return state;
        case CHANGE_END_POINT:
            const orderChangeEndPoint = state.find(item => item.id === action.payload.orderId)
            orderChangeEndPoint.endPoint.id = action.payload.endPointId
            return state
        default:
            return state
    }
}

const defaultSelectedOrder =
    { id: 1, author: "Саша", createdAt: "2022-06-12", startPoint: { id: 1 }, endPoint: { id: 3 } }

export const reducerSelectedOrder = (state = {}, action) => {
    switch (action.type) {
        case SET_SELECTED_ORDER:
            return action.payload
        default:
            return state
    }
}