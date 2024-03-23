export const generateYearArray = ({
  startYear,
  endYear,
}: {
  startYear: number;
  endYear: number;
}): number[] => {
  const yearArray = [];
  for (let year = startYear; year <= endYear; year++) {
    yearArray.push(year);
  }
  return yearArray;
};
