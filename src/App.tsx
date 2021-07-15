import { useState } from "react";
import axios from "axios";

import "./App.css";
import ActionModeSelectors from "./components/ActionModeSelectors/ActionModeSelectors";
import { BIG_DATA, SMALL_URL } from "./config";
import Table from "./components/Table/Table";
import ViewRowCard from "./components/ViewRowCard/ViewRowCard";
import TableSearch from "./components/TableSearch/TableSearch";

const App: React.FC = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [selectRow, setSelectRow] = useState(null);
  const [searchData, setSearchData] = useState([]);

  const fetchSmallData = async () => {
    try {
      let response = await axios.get(SMALL_URL);
      setData(response.data);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  const fetchBigData = async () => {
    try {
      let response = await axios.get(BIG_DATA);
      setData(response.data);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  const selectedRow = (item: any) => {
    setSelectRow(item);
  };

  const onSearch = (item: any) => {
    if (item === "") {
      setSearchData([]);
    }
    const searchbleData = data.filter((user: any) => {
      return (
        user["firstName"].toLowerCase().includes(item.toLowerCase()) ||
        user["lastName"].toLowerCase().includes(item.toLowerCase()) ||
        user["email"].toLowerCase().includes(item.toLowerCase()) ||
        user["phone"].toLowerCase().includes(item.toLowerCase())
      );
    });

    setSearchData(searchbleData);
  };

  const tableData = searchData.length > 0 ? searchData : data

  if (error) {
    return (
      <div>
        <h1>Ошибка загрузки</h1>
      </div>
    );
  }

  return (
    <div className="app">
      <ActionModeSelectors
        fetchSmallData={fetchSmallData}
        fetchBigData={fetchBigData}
      />
      <TableSearch onSearch={onSearch} />
      <Table
        data={tableData}
        selectedRow={selectedRow}
      />
      {selectRow && <ViewRowCard row={selectRow} />}
    </div>
  );
};

export default App;
