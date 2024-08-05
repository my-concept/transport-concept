const formattedInput = (text: string) => {
  const arr = text.replace(" ", "+");
  return arr;
};

export const useFetchAddresses = async (address: string) => {
  try {
    const query = formattedInput(address);

    const response = await fetch(
      `https://api-adresse.data.gouv.fr/search/?q=${query}&lat=48.789&lon=2.789`
    );

    if (!response.ok) {
      throw new Error(`Erreur de requête: ${response.status}`);
    }

    const data = await response.json();

    return { data };
  } catch (error) {
    console.error(
      `Erreur lors de la récupération des données : ${error.message}`
    );
  }
};
