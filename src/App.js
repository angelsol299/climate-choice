import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { Loader } from "./components/Loader";
import { fetchUsersData } from "./services/api";
import "../src/App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsersData(setData, setIsLoading);
  }, []);

  return (
    <div className="App">
      <Header />
      {isLoading ? <Loader /> : <Table data={data} />}
    </div>
  );
}

export default App;
