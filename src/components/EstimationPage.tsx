import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import { CarList } from "./CarList";
import { Map } from "./map/Map";

import { useDispatch, useSelector } from "react-redux";
import { addDistance } from "src/redux/estimationSlice";
import { ReservationForm } from "./ReservationForm";

export const EstimationPage = () => {
  const dispatch = useDispatch();
  const departure = useSelector(
    (state) => state.estimation.estimation.departure
  );
  const arrival = useSelector((state) => state.estimation.estimation.arrival);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    dispatch(addDistance(distance));
  }, [departure, arrival, distance]);

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
    >
      <Box width={"100%"} sx={{ border: "1px solid black" }}>
        <ReservationForm />
      </Box>

      <Box
        sx={{
          display: "flex",
          border: "1px solid black",
          flexDirection: "row",
          flexWrap: "nowrap",
        }}
      >
        <CarList />
        <Box sx={{ width: "100%" }}>
          <Map
            departureCoordinates={departure[0]?.geometry.coordinates}
            arrivalCoordinates={arrival[0]?.geometry.coordinates}
            setDistance={setDistance}
          />
        </Box>
      </Box>
    </Container>
  );
};
