import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { Loader } from "./components/Loader";
import { fetchUsersData } from "./services/api";
import "../src/App.css";

const StartScreen = ({ history }) => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsersData(setData, setIsLoading);
  }, []);

  const filteredUsers = data.filter((item) => {
    const searchByName = item.contact_persons[0].name
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(searchValue.toLocaleLowerCase().replace(/\s+/g, ""));

    const searchByCountry = item.country
      .toLocaleLowerCase()
      .replace(/\s+/g, "")
      .includes(searchValue.toLocaleLowerCase().replace(/\s+/g, ""));

    const searchByCity = item.city
      .toLocaleLowerCase()
      .replace(/\s+/g, "")
      .includes(searchValue.toLocaleLowerCase().replace(/\s+/g, ""));

    const searchByEmail = item.contact_persons[0].email
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(searchValue.toLocaleLowerCase().replace(/\s+/g, ""));

    return searchByName || searchByCountry || searchByCity || searchByEmail;
  });

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      {isLoading ? (
        <Loader />
      ) : (
        <Table data={filteredUsers} history={history} />
      )}{" "}
    </>
  );
};

export default StartScreen;
