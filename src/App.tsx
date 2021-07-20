import { useState } from "react";
import axios from "axios";

import "./App.css";

import { BIG_DATA, SMALL_URL } from "./config";
import { sortByNumber } from "./utilities/sortByNumber";

import ActionModeSelectors from "./components/ActionModeSelectors/ActionModeSelectors";
import Table from "./components/Table/Table";
import ViewRowCard from "./components/ViewRowCard/ViewRowCard";
import TableSearch from "./components/TableSearch/TableSearch";
import AddNewRow from "./components/AddNewRow/AddNewRow";
import Pagination from "./components/Pagination/Pagination";
import Loader from "./components/Loader/Loader";

const App: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(false);
  const [selectRow, setSelectRow] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [sortDirection, setSortDirection] = useState<any>(null);
  const [sortField, setSortField] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageSize, setPageSize] = useState(50);
  const [loading, setLoading] = useState(false);

  const fetchSmallData = async () => {
    setLoading(true);
    setSearchData([]);
    try {
      let response = await axios.get(SMALL_URL);

      let sorted = sortByNumber(response.data, "id");
      setData(sorted.sortedData);
      setSortDirection(sorted.direction);
      setSortField(sorted.sortField);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  const fetchBigData = async () => {
    setLoading(true);
    setSearchData([]);
    try {
      let response = await axios.get(BIG_DATA);

      let sorted = sortByNumber(response.data, "id");
      setData(sorted.sortedData);
      setSortDirection(sorted.direction);
      setSortField(sorted.sortField);
      setLoading(false);
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
    if (item) {
      const searchbleData = data.filter((user: any) => {
        return (
          user["firstName"].toLowerCase().includes(item.toLowerCase()) ||
          user["lastName"].toLowerCase().includes(item.toLowerCase()) ||
          user["email"].toLowerCase().includes(item.toLowerCase()) ||
          user["phone"].toLowerCase().includes(item.toLowerCase())
        );
      });
      setSearchData(searchbleData);
    }
  };

  const sortHandler = (item: any) => {
    const { sortedData, direction, sortField } = item;
    setData(sortedData);
    setSortDirection(direction);
    setSortField(sortField);
    if (searchData.length > 1) {
      setSearchData(sortedData);
      setSortDirection(direction);
      setSortField(sortField);
    }
  };

  const tableData = searchData.length >= 1 ? searchData : data;

  const sendData = (arr: any[]) => {
    let updArr = [...arr];
    if (data.length > 50) {
      updArr = updArr.slice(
        pageSize * (currentPage - 1),
        pageSize * currentPage
      );
    }
    return updArr;
  };

  const pagesCount = Math.ceil(tableData.length / pageSize);

  const addNewRow = (item: any) => {
    data.unshift(item);
    setData([...data]);
  };

  const getCurrentPage = (item: number) => {
    setCurrentPage(item);
  };


  if (error) {
    return (
      <div className="app">
        <ActionModeSelectors
          fetchSmallData={fetchSmallData}
          fetchBigData={fetchBigData}
        />
        <h1 style={{margin: '20px 0', textAlign:'center'}}>Упс что-то пошло не так</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="app">
        <ActionModeSelectors
          fetchSmallData={fetchSmallData}
          fetchBigData={fetchBigData}
        />
        <Loader />
      </div>
    );
  }

  if (data.length <= 0) {
    return (
      <div className="app">
        <ActionModeSelectors
          fetchSmallData={fetchSmallData}
          fetchBigData={fetchBigData}
        />
      </div>
    );
  }

  return (
    <div className="app">
      <ActionModeSelectors
        fetchSmallData={fetchSmallData}
        fetchBigData={fetchBigData}
      />
      <TableSearch onSearch={onSearch} searchData={searchData} />
      <AddNewRow addNewRow={addNewRow} />
      <Table
        sortDirection={sortDirection}
        sortField={sortField}
        sortHandler={sortHandler}
        data={sendData(tableData)}
        selectedRow={selectedRow}
      />
      {tableData.length > 50 && (
        <Pagination
          currentPage={currentPage}
          pagesCount={pagesCount}
          getCurrentPage={getCurrentPage}
        />
      )}

      {selectRow && <ViewRowCard row={selectRow} />}
    </div>
  );
};

export default App;
