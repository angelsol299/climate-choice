import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Table } from "../components/Table";
import { Loader } from "../components/Loader";
import { fetchUsersData } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { filteredUsers } from "../utils";
import "../App.css";

const StartScreen = ({ history }) => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.users.isDataLoading);
  const getusersData = useSelector((state) => state.users.data);
  const filteredData = filteredUsers(getusersData, searchValue);

  useEffect(() => {
    if (filteredData.length === 0) {
      dispatch(fetchUsersData());
    }
  }, [dispatch]);

  console.log("====================================");
  console.log({ filteredData });
  console.log("====================================");

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      {!isLoading ? (
        <Table
          data={filteredData}
          history={history}
          searchValue={searchValue}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default StartScreen;
