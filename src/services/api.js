const loadUsers = async () => {
  return await fetch(
    "https://coding-challenge.climatechoice.tech/api/v1/companies/"
  ).then((res) => res.json());
};

export const fetchUsersData = async (setData, setIsLoading) => {
  try {
    setIsLoading(true);
    const result = await loadUsers();

    if (!result.ok) {
      //possibility to show a more detail error
      console.log("response error");
    }

    setIsLoading(false);
    setData(result);
  } catch (e) {
    console.log(e);
  }
};
