export const priceCalculation = (
  distance: number,
  formule: string,
  isFromAirport = false
) => {
  let price;
  let distanceInKm = distance / 1000;
  let pricePerKm;
  if (isFromAirport) pricePerKm = 19.7;
  else {
    switch (formule) {
      case "Confort":
        pricePerKm = 3.9;
        break;
      case "VIP":
        pricePerKm = 2.9;
        break;
      case "Taxi":
        pricePerKm = 1.9;
        break;
      default:
        pricePerKm = 1.9;
    }
  }

  price = pricePerKm * distanceInKm;
  return parseInt(price);
};

export const priceCalculationFromAirport = (
  distance: number,
  formule: string
) => {
  let price;
  let distanceInKm = distance / 1000;
  let pricePerKm;
  switch (formule) {
    case "Confort":
      pricePerKm = 60.9;
      break;
    case "VIP":
      pricePerKm = 59.8;
      break;
    case "Taxi":
      pricePerKm = 40.7;
      break;
    default:
      pricePerKm = 100.5;
  }

  price = pricePerKm * distanceInKm;
  return parseInt(price);
};

export const timeCalculation = (seconds: number) => {
  if (isNaN(seconds) || seconds < 0) {
    throw new Error("Invalid input: 'seconds' must be a non-negative number");
  }

  const hours = seconds / 3600;

  const wholeHours = Math.floor(hours);
  const remainingSeconds = hours - wholeHours;

  const formattedSeconds = remainingSeconds.toFixed(2);

  return `${wholeHours}h ${formattedSeconds}s`;
};
