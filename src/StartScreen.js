import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { Loader } from "./components/Loader";
import { fetchUsersData } from "./store/action";
import "../src/App.css";
import { useDispatch, useSelector } from "react-redux";

const StartScreen = ({ history }) => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);

  const dataResult = useSelector((state) => state.users);

  console.log("====================================");
  console.log({ dataResult });
  console.log("====================================");
  const data = dataResult.payload;
  console.log("====================================");
  console.log({ data });
  console.log("====================================");

  const filteredUsers =
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

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      {filteredUsers && <Table data={filteredUsers} history={history} />}
    </>
  );
};

export default StartScreen;
