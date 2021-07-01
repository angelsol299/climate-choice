export const filteredUsers = (data, searchValue) =>
  data &&
  data.filter((item) => {
    const searchByName = item.contact_persons[0].name
      .toLowerCase()
      .includes(searchValue.toLocaleLowerCase());

    const searchByCountry = item.country
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());

    const searchByCity = item.city
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());

    const searchByEmail = item.contact_persons[0].email
      .toLowerCase()
      .includes(searchValue.toLocaleLowerCase());
    return searchByName || searchByCountry || searchByCity || searchByEmail;
  });
