import { Box } from "@mui/system";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import RoutingControl from "./leaflerRouting";

import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";

interface MapProps {
  departureCoordinates: [number, number];
  arrivalCoordinates: [number, number];
  setDistance: () => {
    totalDistance: number;
    totalTime: number;
  };
}

export const Map = ({
  departureCoordinates,
  arrivalCoordinates,
  setDistance,
}: MapProps) => {
  const itinerary = useSelector((state) => state.estimation);

  useEffect(() => {}, [
    departureCoordinates,
    arrivalCoordinates,
    setDistance,
    itinerary,
  ]);
  return (
    <>
      <Box id="map">
        <Box sx={{ width: "100%", height: "70vh", border: "1px solid black" }}>
          <MapContainer
            style={{ height: "100%", width: "100%" }}
            center={[48.866667, 2.333333]}
            zoom={13}
            attributionControl={false}
          >
            {departureCoordinates && arrivalCoordinates ? (
              <RoutingControl
                departure={departureCoordinates}
                arrival={arrivalCoordinates}
                setDistance={setDistance}
              />
            ) : (
              <>loading ...</>
            )}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {departureCoordinates && (
              <Marker
                draggable={false}
                position={[departureCoordinates[1], departureCoordinates[0]]}
                autoPan
              ></Marker>
            )}

            {arrivalCoordinates && (
              <Marker
                draggable={false}
                position={[arrivalCoordinates[1], arrivalCoordinates[0]]}
                autoPan
              ></Marker>
            )}
          </MapContainer>
        </Box>
      </Box>
    </>
  );
};
