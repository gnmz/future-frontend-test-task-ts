import { useState } from "react";
import axios from "axios";

import "./App.css";
import ActionModeSelectors from "./components/ActionModeSelectors/ActionModeSelectors";
import { BIG_DATA, SMALL_URL } from "./config";
import Table from "./components/Table/Table";

const App: React.FC = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

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
      <Table data={data} />
    </div>
  );
};

export default App;
