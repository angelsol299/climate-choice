import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Table } from "../components/Table";
import { Loader } from "../components/Loader";
import { fetchUsersData } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { filteredUsers } from "../utils";
import "../App.css";
import { selectIsLoading, selectUsersData } from "../store/selectors";

const StartScreen = ({ history }) => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const getusersData = useSelector(selectUsersData);
  const filteredData = filteredUsers(getusersData, searchValue);

  useEffect(() => {
    if (filteredData.length === 0) {
      dispatch(fetchUsersData());
    }
  }, [dispatch]);

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
