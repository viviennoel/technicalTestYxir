const generateRandomPercentages = () => {
  const randomArray = [];
  let sum = 0;

  for (let i = 0; i < 8; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomNumber);
    sum += randomNumber;
  }

  randomArray.push(100 - sum);
  return randomArray;
};

export const mockProductionSourceData = () => {
  const randomArray = generateRandomPercentages();

  return {
    results: [
      {
        sub_category: 'Fuel',
        valeur: randomArray[0],
      },
      {
        sub_category: 'Gas',
        valeur: randomArray[1],
      },
      {
        sub_category: 'Coal',
        valeur: randomArray[2],
      },
      {
        sub_category: 'Short-lived radioactive waste',
        valeur: randomArray[3],
      },
      {
        sub_category: 'Other renewables',
        valeur: randomArray[4],
      },
      {
        sub_category: 'CO2',
        valeur: randomArray[5],
      },
      {
        sub_category: 'Nuclear',
        valeur: randomArray[6],
      },
      {
        sub_category: 'Hydraulic',
        valeur: randomArray[7],
      },
      {
        sub_category: 'Long-lived radioactive waste',
        valeur: randomArray[8],
      },
    ],
  };
};
