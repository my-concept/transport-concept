import vanCarImage from "src/assets/vanCar.png";
import taxiCarImage from "src/assets/taxiCar.png";
import vipCarImage from "src/assets/vipCar.png";

export default [
  {
    name: "patrick",
    timeFromPoint: 4,
    stars: 5,
    formula: "Van",
    nbOfPassenger: 3,
    timeEstimated: 5,
    scheduledDropOff: "14h53",
    carImage: vanCarImage,
  },
  {
    name: "Vincent",
    timeFromPoint: 5.69,
    stars: 3,
    formula: "VIP",
    nbOfPassenger: 2,
    timeEstimated: 5,
    scheduledDropOff: "12h13",
    carImage: vipCarImage,
  },
  {
    name: "Anna",
    timeFromPoint: 7.12,
    stars: 4,
    formula: "Taxi",
    nbOfPassenger: 4,
    timeEstimated: 9,
    scheduledDropOff: "17h01",
    carImage: taxiCarImage,
  },
];
