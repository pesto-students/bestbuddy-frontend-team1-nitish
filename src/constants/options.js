export const filterOptions = [
  {
    label: "City",
    name: "city",
    value: ["Delhi", "Chennai", "Mumbai", "Jaipur", "Chandigarh"],
  },
  {
    label: "Category",
    name: "category",
    value: ["Flat", "PG", "Apartment"],
  },
  {
    label: "Gender",
    name: "gender",
    value: ["Male", "Female"],
  },
];

export const rangeFilterOptions = [
  {
    label: "Price Range",
    name: "price",
    value: [
      { rangeLabel: "Less than 5000", min: 0, max: 5000 },
      { rangeLabel: "5001-7500", min: 5001, max: 7500 },
      { rangeLabel: "7501-10000", min: 7501, max: 10000 },
      { rangeLabel: "10001-15000", min: 10001, max: 15000 },
      { rangeLabel: "Greater than 15000", min: 15000, max: Number.MAX_VALUE },
    ],
  },
];

export const PRICE_FILTER = "price";
