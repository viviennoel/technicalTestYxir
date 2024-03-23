export const getTitleFromLabel = (label: string): string => {
  const title = label.replaceAll('-', ' ');
  const capitalizedTitle = capitalizeFirstLetter(title);
  return capitalizedTitle;
};

const capitalizeFirstLetter = (sentence: string): string => {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
};
