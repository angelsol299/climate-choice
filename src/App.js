import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { Loader } from "./components/Loader";
import { fetchUsersData } from "./services/api";
import "../src/App.css";

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [originalDataset, setOriginalDataset] = useState([]);
  let array = data;

  useEffect(() => {
    fetchUsersData(setData, setIsLoading);
  }, []);

  const testClick = (e) => {
    setOriginalDataset(data);
    setSearchValue(e.target.value);
    array = data.filter((item) =>
      item.contact_persons[0].name.includes(searchValue)
    );
    setData(array);
  };

  const clearArray = () => {
    setData(originalDataset);
  };

  console.log("====================================");
  console.log({ data });
  console.log("====================================");

  return (
    <div className="App">
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        testClick={testClick}
        clearArray={clearArray}
      />
      {isLoading ? <Loader /> : <Table data={data} />}
    </div>
  );
}

export default App;
