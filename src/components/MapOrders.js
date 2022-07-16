import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { shallowEqual, useSelector } from "react-redux"
import { getSelectedOrder } from "../store/selectors"
import "./map.css";

import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

export const MapOrders = () => {

    const { startPoint, endPoint } = useSelector(getSelectedOrder, shallowEqual)



    return (
        <div>
            <h2>Карта</h2>

            <MapContainer center={
                (startPoint && endPoint) ? [
                    (startPoint.longitude + endPoint.longitude) / 2,
                    (startPoint.latitude + endPoint.latitude) / 2,
                ] :
                    [55.755819, 37.617644]
            } zoom={13} scrollWheelZoom={true} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {
                    startPoint && endPoint &&
                    <RoutingMachine startPoint={startPoint} endPoint={endPoint} />
                }
            </MapContainer>        </div >
    )
}


const createRoutineMachineLayer = ({ startPoint, endPoint }) => {
    const instance = L.Routing.control({
        waypoints: [
            L.latLng(startPoint.longitude, startPoint.latitude),
            L.latLng(endPoint.longitude, endPoint.latitude)
        ],
        // ...otherOptions
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);