export enum SearchInputResultType {
  City = "Miasto",
  Monument = "Zabytek",
}

export const transformToPluralSearchInputResultType = (
  type: SearchInputResultType
) => {
  if (type === SearchInputResultType.City) {
    return "Miasta";
  }
  return "Zabytki";
};
