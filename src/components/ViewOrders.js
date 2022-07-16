import { ListOrders } from "./ListOrders"
import { MapOrders } from "./MapOrders"
import { Col, Container, Row } from "react-bootstrap"

export const ViewOrders = () => {
    return (
        <>
            <h1>Карта перевозок</h1>
            <Row xs={2}>
                <Col>
                    <ListOrders />
                </Col>
                <Col>
                    <MapOrders />
                </Col>
            </Row>

        </>
    )
}