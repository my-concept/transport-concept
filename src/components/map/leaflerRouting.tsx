import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutineMachineLayer = ({
  departure = [0, 0],
  arrival = [0, 0],
  setDistance,
}) => {
  const instance = L.Routing.control({
    position: "topleft",
    routeWhileDragging: false,
    draggableWaypoints: false,
    waypoints: [
      L.latLng(departure[1], departure[0]),
      L.latLng(arrival[1], arrival[0]),
    ],
    lineOptions: {
      styles: [
        {
          color: "#757de8",
        },
      ],
    },
  });

  instance.on("routesfound", function (e) {
    var routes = e.routes;
    var summary = routes[0].summary;
    setDistance(summary);
  });

  instance?._markerGroup?.disableDrag();
  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
