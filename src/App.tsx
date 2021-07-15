import { useState } from "react";
import axios from "axios";

import "./App.css";
import ActionModeSelectors from "./components/ActionModeSelectors/ActionModeSelectors";
import { BIG_DATA, SMALL_URL } from "./config";
import Table from "./components/Table/Table";
import ViewRowCard from "./components/ViewRowCard/ViewRowCard";

const App: React.FC = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [selectRow, setSelectRow] = useState(null)

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

  const selectedRow = (item:any) => {
    setSelectRow(item)
  }

  if (error) {
    return (
      <div>
        <h1>Ошибка загрузки</h1>
      </div>
    );
  }

  console.log(selectRow)

  return (
    <div className="app">
      <ActionModeSelectors
        fetchSmallData={fetchSmallData}
        fetchBigData={fetchBigData}
      />
      <Table data={data} selectedRow={selectedRow} />
      <ViewRowCard />
    </div>
  );
};

export default App;
