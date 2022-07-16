export const SET_SELECTED_ORDER = "SELECTED_ORDER::SET_ACTIVE"
export const CHANGE_START_POINT = "ORDERS::CHANGE_START_POINT"
export const CHANGE_END_POINT = "ORDERS::CHANGE_END_POINT"

export const setSelectedOrder = (order) => {
    return {
        type: SET_SELECTED_ORDER,
        payload: order
    }
}

export const selectOrder = (order) => (dispatch, getState) => {
    const points = getState().points;
    const startPoint = points.find(item => item.id === order.startPoint.id);
    const endPoint = points.find(item => item.id === order.endPoint.id);
    dispatch(setSelectedOrder({ ...order, startPoint, endPoint }))

}

export const changeStartPoint = (orderId, startPointId) => {
    return {
        type: CHANGE_START_POINT,
        payload: { orderId, startPointId }
    }
}

export const changeEndPoint = (orderId, endPointId) => {
    return {
        type: CHANGE_END_POINT,
        payload: { orderId, endPointId }
    }
}