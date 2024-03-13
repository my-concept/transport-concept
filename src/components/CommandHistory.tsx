import { TaxiRideHistoryList } from "./TaxiRideHistoryList";
import { useSelector } from "react-redux";
import { RideType } from "./types/genericTypes";

export const CommandHistory = () => {
  const rides = useSelector((state) => state.rides.rides);
  const displayRidesHistory = rides.map((ride: RideType) => (
    <TaxiRideHistoryList key={ride.driverName} {...ride} />
  ));
  return <div>{displayRidesHistory}</div>;
};
