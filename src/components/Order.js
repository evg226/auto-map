import { useState } from "react"
import { Form } from "react-bootstrap"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { changeEndPoint, changeStartPoint, selectOrder, setSelectedOrder } from "../store/actions"
import { getPoints } from "../store/selectors"

export const Order = ({ order, isSelected }) => {

    const [startPoint, setStartPoint] = useState(order.startPoint)
    const [endPoint, setEndPoint] = useState(order.endPoint)

    const dispatch = useDispatch()
    const handleRowClick = () => {
        dispatch(selectOrder(order))
    }

    const points = useSelector(getPoints, shallowEqual)

    const handleStartPointChange = (event) => {
        const newStartPoint = Number(event.target.value);
        if (newStartPoint !== endPoint.id) {
            dispatch(changeStartPoint(order.id, newStartPoint))
        } else {
            throw new Error("Начальная и конечная точка не могут быть равны")
        }
    }

    const handleEndPointChange = (event) => {
        const newEndPoint = Number(event.target.value);
        if (newEndPoint !== startPoint.id) {
            dispatch(changeEndPoint(order.id, newEndPoint))
        } else {
            throw new Error("Начальная и конечная точка не могут быть равны")
        }

    }

    return (
        <tr
            className={isSelected ? "table-dark" : ""}
            onClick={handleRowClick}
        >
            <td>{order.id}</td>
            <td>{order.author}</td>

            <td>
                <Form.Select defaultValue={startPoint.id} onChange={handleStartPointChange}>
                    <PointsList points={points} />
                </Form.Select>
            </td>
            <td>
                <Form.Select defaultValue={endPoint.id} onChange={handleEndPointChange}>
                    <PointsList points={points} />
                </Form.Select>

            </td>
        </tr>
    )
}

const PointsList = ({ points }) =>
    points && points.map(point =>
        <option key={point.id} value={point.id}

        >{point.name}</option>
    )
