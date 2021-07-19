import { useState } from "react";
import axios from "axios";

import "./App.css";
import ActionModeSelectors from "./components/ActionModeSelectors/ActionModeSelectors";
import { BIG_DATA, SMALL_URL } from "./config";
import Table from "./components/Table/Table";
import ViewRowCard from "./components/ViewRowCard/ViewRowCard";
import TableSearch from "./components/TableSearch/TableSearch";
import AddNewRow from "./components/AddNewRow/AddNewRow";
import { sortByNumber } from "./utilities/sortByNumber";

const App: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(false);
  const [selectRow, setSelectRow] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [sortDirection, setSortDirection] = useState<any>(null);
  const [sortField, setSortField] = useState<any>(null);

  const fetchSmallData = async () => {
    try {
      let response = await axios.get(SMALL_URL);

      let sorted = sortByNumber(response.data, "id");
      setData(sorted.sortedData);
      setSortDirection(sorted.direction);
      setSortField(sorted.sortField);

      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  const fetchBigData = async () => {
    try {
      let response = await axios.get(BIG_DATA);

      let sorted = sortByNumber(response.data, "id");
      setData(sorted.sortedData);
      setSortDirection(sorted.direction);
      setSortField(sorted.sortField);

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

  const sortHandler = (item: any) => {
    const { sortedData, direction, sortField } = item;
    setData(sortedData);
    setSortDirection(direction);
    setSortField(sortField);
  };

  const tableData = searchData.length > 0 ? searchData : data;

  if (error) {
    return (
      <div>
        <h1>Ошибка загрузки</h1>
      </div>
    );
  }

  const addNewRow = (item: any) => {
    data.unshift(item);
    setData([...data]);
  };

  return (
    <div className="app">
      <ActionModeSelectors
        fetchSmallData={fetchSmallData}
        fetchBigData={fetchBigData}
      />
      <TableSearch onSearch={onSearch} />
      <AddNewRow addNewRow={addNewRow} />
      <Table
        sortDirection={sortDirection}
        sortField={sortField}
        sortHandler={sortHandler}
        data={tableData}
        selectedRow={selectedRow}
      />
      {selectRow && <ViewRowCard row={selectRow} />}
    </div>
  );
};

export default App;
