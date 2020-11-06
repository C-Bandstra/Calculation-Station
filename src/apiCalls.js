export const fetchCalculations = async () => {
  const response = await fetch('https://calculation-station.herokuapp.com/calculations')
    const data = await response.json();
    return data;
}

export const addCalculation = async (calculation) => {
  calculation = {"sequence": calculation};
  try {
    const response = await fetch(
      "https://calculation-station.herokuapp.com/addCalculation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(calculation),
      }
    );
    const calculationsResponse = await response.json(calculation);
    return calculationsResponse;
  } catch (error) {
    console.error(error);
  }
};