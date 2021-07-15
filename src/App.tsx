import { useState } from "react";
import axios from "axios";

import "./App.css";
import ActionModeSelectors from "./components/ActionModeSelectors/ActionModeSelectors";
import { SMALL_URL } from "./config";

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

  console.log(data)

  if (error) {
    return (
      <div>
        <h1>Ошибка загрузки</h1>
      </div>
    );
  }

  return (
    <div className="app">
      <ActionModeSelectors fetchSmallData={fetchSmallData} />
    </div>
  );
};

export default App;
