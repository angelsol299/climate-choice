export const testClick = (
  setOriginalDataset,
  setData,
  array,
  data,
  searchValue
) => {
  setOriginalDataset(data);
  array = data.filter((item) =>
    item.contact_persons[0].name.includes(searchValue)
  );
  setData(array);
};
