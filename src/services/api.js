export const loadUsers = async () => {
  return await fetch(
    "https://coding-challenge.climatechoice.tech/api/v1/companies/"
  ).then((res) => res.json());
};
