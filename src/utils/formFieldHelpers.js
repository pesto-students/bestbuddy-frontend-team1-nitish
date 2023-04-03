const formFields = [
  {
    key: "name",
    name: "property-name",
  },
  {
    key: "city",
    name: "location",
  },
  {
    key: "rent",
    name: "rent",
  },
  {
    key: "category",
    name: "property-type",
  },
  {
    key: "phone",
    name: "phone",
  },
  {
    key: "gender",
    name: "gender",
  },
  {
    key: "availableDate",
    name: "date",
  },
  {
    key: "typeOfShare",
    name: "occupancy",
  },
];

export const getFormValues = (formElements) => {
  if (formElements) {
    const payload = formFields?.reduce((agg, item) => {
      return { ...agg, [item?.key]: formElements[item?.name]?.value };
    }, {});
    return payload;
  }
};

