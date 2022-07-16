import { Table } from "react-bootstrap"
import { shallowEqual, useSelector } from "react-redux"
import { getOrders, getSelectedOrder } from "../store/selectors"
import { Order } from "./Order"

export const ListOrders = () => {

    const orders = useSelector(getOrders, shallowEqual)
    const selectedOrder = useSelector(getSelectedOrder, shallowEqual)

    return (
        <div>
            <h2>Заявки</h2>
            <Table responsive>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Название</td>
                        <td>Старт</td>
                        <td>Финиш</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders && orders.length && orders.map(order =>
                            <Order
                                key={order.id}
                                order={order}
                                isSelected={order.id === selectedOrder.id}
                            />
                        )

                    }
                </tbody>

            </Table>


        </div>
    )
}